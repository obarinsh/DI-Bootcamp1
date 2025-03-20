const express = require('express')
const router = express.Router()
const db = require('../config/db.js');

const getAllPosts = async (req, res) => {

    try {
        const posts = await db.select('*').from('blog')
        res.json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ error: "Database error occurred" });
    }
};


const getPostById = async (req, res) => {
    try {
        const post = await db.select('*').from('blog').where({ id: req.params.id }).first();
        if (!post) return res.status(404).json({ error: "Blog not found" });
        res.json(post);
    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).json({ error: "Database error occurred" });
    }
};


const createPost = async (req, res) => {
    try {
        const newPost = await db('blog').insert({ content: req.body.content }).returning('*');
        res.status(201).json(newPost);
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Database error occurred" });
    }
};

const updatePost = async (req, res) => {
    try {
        const updatedPost = await db('blog').where({ id: req.params.id }).update({ content: req.body.content }).returning('*');
        if (!updatedPost.length) return res.status(404).json({ error: "Blog not found" });
        res.json(updatedPost[0]);
    } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).json({ error: "Database error occurred" });
    }
};

const deletePost = async (req, res) => {
    try {
        const deletedRows = await db('blog').where({ id: req.params.id }).del();
        if (!deletedRows) return res.status(404).json({ error: "Blog not found" });
        res.json({ message: "Blog deleted successfully" });
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).json({ error: "Database error occurred" });
    }
};



router.get('/blogs', getAllPosts);
router.get('/blogs/:id', getPostById);
router.post('/blogs', express.json(), createPost);
router.put('/blogs/:id', express.json(), updatePost);
router.delete('/blogs/:id', deletePost);


module.exports = router