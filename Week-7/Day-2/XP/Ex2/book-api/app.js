const express = require('express');
const app = express();
app.use(express.json());


let books = [
    {
        id: 1,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        publishedYear: 1937
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960
    }
];

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/api/books', (req, res) => {
    res.json(books)
})

app.get('/api/books/:bookId', (req, res) => {
    const { bookId } = req.params
    const book = books.find((item) => item.id == bookId)
    if (!book) {
        return res.status(404).json({ message: 'Book not found' })
    }
    res.status(202).json(book)
})

app.post('/api/books/', (req, res) => {
    const { title, author, publishedYear } = req.body
    const newBook = { title, author, publishedYear, id: books.length + 1 }
    books.push(newBook)
    res.status(201).json(books)
})