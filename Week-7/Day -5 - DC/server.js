const express = require('express')
const path = require('path')
const app = express()
const formRouter = require('./routes/route')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './login.html'))
})
app.use('/', formRouter)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})