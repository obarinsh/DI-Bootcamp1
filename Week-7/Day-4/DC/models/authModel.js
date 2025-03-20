const express = require('express')
const router = express.Router()
const db = require('../config/db.js');
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 10;


const registerUser = async (req, res) => {
    try {
        const { email, username, password, first_name, last_name } = req.body;

        if (!email || !username || !password || !first_name || !last_name) {
            return res.status(400).json({ error: "All fields (email, username, password, first_name, last_name) are required" });
        }

        await db.transaction(async trx => {
            const existingUser = await trx('users').where({ username }).first();
            if (existingUser) {
                throw new Error("Username already exists");
            }
            const existingEmail = await trx('users').where({ email }).first();
            if (existingEmail) {
                throw new Error("Email is already in use");
            }
            const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

            const [newUser] = await trx('users')
                .insert({ email, username, first_name, last_name })
                .returning('*');

            await trx('hashpwd').insert({ username, password: hashedPassword });

            res.status(201).json({ message: "User registered successfully", user: newUser });
        });

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: error.message || "Database error occurred" });
    }
};


const userLogIn = async (req, res) => {
    try {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }
        const credentials = await db('users')
            .join('hashpwd', 'users.username', 'hashpwd.username')
            .where('users.username', username)
            .select('users.id', 'users.username', 'hashpwd.password')
            .first();
        if (!credentials || !credentials.password) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        const passwordMatch = await bcrypt.compare(password, credentials.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid username or password" });
        }

        res.status(200).json({ message: "Login successful", user: { id: credentials.id, username: credentials.username } });
    }
    catch (error) {
        console.error("Error with credentials:", error);
        res.status(500).json({ error: "Database error occurred" });
    }
}


const showUsers = async (req, res) => {
    try {
        const users = await db.select('*').from('users')
        res.json(users);
    } catch (error) {
        console.error("Error fetching userss:", error);
        res.status(500).json({ error: "Database error occurred" });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await db.select('*').from('users').where({ id: req.params.id }).first();
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Database error occurred" });
    }
};

const updateUserById = async (req, res) => {
    try {
        const updatedUser = await db('users').where({ id: req.params.id }).update({ email: req.body.email, username: req.body.username, first_name: req.body.first_name, last_name: req.body.last_name }).returning('*');
        if (!updatedUser.length) return res.status(404).json({ error: "User is not found" });
        res.json(updatedUser[0]);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Database error occurred" });
    }
};


router.post('/register', express.json(), registerUser);
router.post('/login', express.json(), userLogIn);
router.get('/users', express.json(), showUsers)
router.get('/users/:id', express.json(), getUserById)
router.put('/users/:id', express.json(), updateUserById)

module.exports = router