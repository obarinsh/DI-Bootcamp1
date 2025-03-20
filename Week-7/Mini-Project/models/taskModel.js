const express = require('express')
const router = express.Router()
const path = require('path');
const fs = require('fs');

const FILE_PATH = path.join(__dirname, 'tasks.json');
const readTasks = () => {
    try {
        const data = fs.readFileSync(FILE_PATH, 'utf-8');
        return JSON.parse(data)
    } catch (error) {
        console.error("Error reading tasks.json:", error);
        return []
    }
};
const writeTasks = (tasks) => {
    try {
        fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2), 'utf-8');
    } catch (error) {
        console.error("Error writing to tasks.json:", error);
    }
};
router.post('/tasks', (req, res) => {
    const tasks = readTasks();
    const newTask = { id: tasks.length + 1, ...req.body };

    tasks.push(newTask);
    writeTasks(tasks);

    res.status(201).json(newTask);
});

router.get('/tasks/:id', (req, res) => {
    console.log("Received request for task ID:", req.params.id);

    let tasks = readTasks();

    const taskId = parseInt(req.params.id, 10);

    const task = tasks.find(task => task.id === taskId);

    if (!task) {
        console.log("Task not found!");
        return res.status(404).json({ error: "Task not found" });
    }

    console.log("Task found:", task);
    res.json(task);
});

router.delete('/tasks/:id', (req, res) => {
    let tasks = readTasks();
    const taskId = parseInt(req.params.id, 10);

    const filteredTasks = tasks.filter(task => task.id !== taskId);

    if (tasks.length === filteredTasks.length) {
        return res.status(404).json({ error: "Task not found" });
    }

    writeTasks(filteredTasks);
    res.json({ message: "Task deleted successfully" });
});

router.get('/tasks', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

router.put('/tasks/:id', (req, res) => {
    console.log("Received request to update task ID:", req.params.id);

    let tasks = readTasks();
    const taskId = parseInt(req.params.id, 10);
    const { title, completed } = req.body;

    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex === -1) {
        console.log("Task not found!");
        return res.status(404).json({ error: "Task not found" });
    }

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        title: title !== undefined ? title : tasks[taskIndex].title,
        completed: completed !== undefined ? completed : tasks[taskIndex].completed
    };
    writeTasks(tasks);

    console.log("Updated task:", tasks[taskIndex]);
    res.json(tasks[taskIndex]);
});
module.exports = router