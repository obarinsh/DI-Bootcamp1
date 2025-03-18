const express = require('express')
const router = express.Router()


const books = [
    {
        id: 1,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt and David Thomas",
        read: true
    },
    {
        id: 2,
        title: "Clean Code",
        author: "Robert C. Martin",
        read: true
    },
    {
        id: 3,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        read: false
    },
    {
        id: 4,
        title: "You Don’t Know JS",
        author: "Kyle Simpson",
        read: false
    },
    {
        id: 5,
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        read: true
    },
    {
        id: 6,
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        read: false
    }
];

const getAll = (req, res) => {
    res.json(books)
}

const addNewItem = (req, res) => {
    const { title, author, read } = req.body
    const newBook = {
        id: books.length + 1,
        title,
        author,
        read: read ?? false
    }
    books.push(newBook)
    res.status(201).json(newBook)
}

const updateItemByID = (req, res) => {
    const id = Number(req.params.id)
    const index = books.findIndex(book => book.id === id)
    if (index === -1) {
        return res.status(404).json({ error: 'Nook is not found' })
    }
    const updatedBook = {
        id: books[index].id,
        title: req.body.title,
        author: req.body.author,
        read: req.body.read
    }

    books[index] = updatedBook
    res.status(200).json('Book is updated')
}

const deleteItemByID = (req, res) => {
    const id = Number(req.params.id)
    const index = books.findIndex(book => book.id === id)
    books.splice(index, 1)
    res.status(200).json('Book is  deleted')
}

router.get('/', getAll)
router.post('/', addNewItem)
router.put('/:id', updateItemByID)
router.delete('/:id', deleteItemByID)


module.exports = router