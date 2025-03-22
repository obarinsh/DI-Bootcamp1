const express = require('express')
const quizRouter = require('./routes/quiz.js')
const path = require('path')

// create server
const app = express()

app.use(express.static('public'))
// serve html files (client)
app.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'quiz.html'))
})

app.use(express.json())
app.use('/api/quiz', quizRouter)
// what the client can request

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})