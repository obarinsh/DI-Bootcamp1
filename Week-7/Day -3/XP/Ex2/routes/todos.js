const express = require('express')
const router = express.Router()


const todos = [
    {
        id: 1,
        task: "Set up Express project",
        completed: true
    },
    {
        id: 2,
        task: "Create routes for homepage and about page",
        completed: true
    },
    {
        id: 3,
        task: "Implement middleware for logging requests",
        completed: false
    },
    {
        id: 4,
        task: "Add error handling middleware",
        completed: false
    },
    {
        id: 5,
        task: "Test routes using Postman",
        completed: true
    },
    {
        id: 6,
        task: "Deploy app to a cloud service",
        completed: false
    }
];

const getAll = (req, res) => {
    res.json(todos)
}

const addNewItem = (req, res) => {
    const { task, completed } = req.body
    const newTask = {
        id: todos.length + 1,
        task,
        completed: completed ?? false
    }
    todos.push(newTask)
    res.status(201).json(newTask)
}

const updateItemByID = (req, res) => {
    const id = Number(req.params.id)
    const index = todos.findIndex(task => task.id === id)
    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' })
    }
    const updatedTask = {
        id: todos[index].id,
        task: req.body.task,
        completed: req.body.completed
    }

    todos[index] = updatedTask
    res.status(200).json('Task updated')
}

const deleteItemByID = (req, res) => {
    const id = Number(req.params.id)
    const index = todos.findIndex(task => task.id === id)
    todos.splice(index, 1)
    res.status(200).json('Task deleted')
}

router.get('/', getAll)
router.post('/', addNewItem)
router.put('/:id', updateItemByID)
router.delete('/:id', deleteItemByID)


module.exports = router