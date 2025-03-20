const express = require('express')
const router = express.Router()
const db = require('../config/db.js');

const getAllBooks = async (req, res) => {

    try {
        const books = await db.select('*').from('books')
        res.json(books);
    } catch (error) {
        console.error("Error fetching bookss:", error);
        res.status(500).json({ error: "Database error occurred" });
    }
};


const getBookById = async (req, res) => {
    try {
        const book = await db.select('*').from('books').where({ id: req.params.id }).first();
        if (!book) return res.status(404).json({ error: "Book is not found" });
        res.json(book);
    } catch (error) {
        console.error("Error fetching book:", error);
        res.status(500).json({ error: "Database error occurred" });
    }
};


const createBook = async (req, res) => {
    try {
        const newBook = await db('books').insert({ title: req.body.title, author: req.body.author, publishedyear: req.body.publishedyear }).returning('*');
        res.status(201).json(newBook);
    } catch (error) {
        console.error("Error creating book:", error);
        res.status(500).json({ error: "Database error occurred" });
    }
};

// const updateBook = async (req, res) => {
//     try {
//         const updatedBook = await db('books').where({ id: req.params.id }).update({ title: req.body.title, author: req.body.author, publishedyear: req.body.publishedyear }).returning('*');
//         if (!updatedBook.length) return res.status(404).json({ error: "Book is not found" });
//         res.json(updatedBook[0]);
//     } catch (error) {
//         console.error("Error updating book:", error);
//         res.status(500).json({ error: "Database error occurred" });
//     }
// };

// const deleteBook = async (req, res) => {
//     try {
//         const deletedBook = await db('books').where({ id: req.params.id }).del();
//         if (!deletedBook) return res.status(404).json({ error: "Book is not found" });
//         res.json({ message: "Book deleted successfully" });
//     } catch (error) {
//         console.error("Error deleting book:", error);
//         res.status(500).json({ error: "Database error occurred" });
//     }
// };



router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', express.json(), createBook);



module.exports = router