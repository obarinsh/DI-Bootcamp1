const express = require('express')
const todosRouter = require('./routes/todos')
const app = express()


app.use(express.json())
app.use('/todos', todosRouter)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})