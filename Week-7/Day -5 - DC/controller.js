let users = require('./users.json')
const fs = require('fs')
const bcrypt = require('bcrypt')
const path = require('path')

const filePath = path.join(__dirname, 'users.json')
const saltRounds = 10

const showAllUsers = (req, res) => {
    res.json(users)
}


const showUserById = (req, res) => {
    const { id } = req.params
    const user = users.find(user => user.id === parseInt(id))

    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    res.json(user)
}


const userRegister = async (req, res) => {
    const { first_name, last_name, email, username, password } = req.body
    if (!first_name || !last_name || !email || !username || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const existingEmail = users.find(user => user.email === email)
    if (existingEmail) {
        return res.status(409).json({ message: 'Email already exists' })
    }

    const existingUsername = users.find(user => user.username === username)
    if (existingUsername) {
        return res.status(409).json({ message: 'Username already exists' })
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const newUser = {
        id: Date.now(),
        first_name,
        last_name,
        email,
        username,
        password: hashedPassword,
    }
    users.push(newUser)
    console.log('BODY RECEIVED:', req.body)

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error('Failed to save user:', err)
            return res.status(500).json({ message: 'Error saving user' })
        }

        console.log('User saved to users.json')
        return res.status(201).json({ message: 'User registered successfully', user: newUser })
    })
}



const userLogin = async (req, res) => {
    const { username, password } = req.body
    const user = users.find(user => user.username === username)

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid username or password' })
    }
    res.status(200).json({ message: '✅ Login successful', user: { username: user.username, email: user.email } })
}

const updateUserByID = (req, res) => {
    const { id } = req.params
    const { first_name, last_name, email, username, password } = req.body

    if (!id || !first_name || !last_name || !email || !username || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const user = users.find(user => user.id === parseInt(id))

    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    const existingUsername = users.find(u => u.username === username && u.id !== parseInt(id))
    if (existingUsername) {
        return res.status(409).json({ message: 'Username already in use by another user' })
    }

    user.first_name = first_name
    user.last_name = last_name
    user.email = email
    user.username = username

    const fs = require('fs')
    const path = require('path')
    const filePath = path.join(__dirname, 'users.json')

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error('Error saving file:', err)
            return res.status(500).json({ message: 'Failed to update user' })
        }

        res.json({ message: 'User updated successfully', user })
    })
}


module.exports = {
    showAllUsers,
    showUserById,
    userRegister,
    userLogin,
    updateUserByID
}