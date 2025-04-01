const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())
app.get('/api/hello', (req, res) => {
    console.log('API request received')
    res.send('Hello From Express')
})

app.post('/api/world', (req, res) => {
    console.log('API request received')
    const { message } = req.body
    console.log(`post:${message}`)
    res.json({ reply: `I recieved your request.This is what you send me: ${message}` })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})