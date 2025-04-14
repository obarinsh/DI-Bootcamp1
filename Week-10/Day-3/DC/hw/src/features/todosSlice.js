import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const initialState = {
    tasksByDay: Object.fromEntries(days.map(day => [day, []]))
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { day, task } = action.payload
            state.tasksByDay[day].push({
                id: nanoid(),
                task,
                isCompleted: false
            })
        },

        toggleTask: (state, action) => {
            const { day, id } = action.payload
            const task = state.tasksByDay[day].find(task => task.id === id)
            if (task) {
                task.isCompleted = !task.isCompleted
            }
        },
        editTask: (state, action) => {
            const { day, id, newText } = action.payload
            const task = state.tasksByDay[day].find(task => task.id === id)
            if (task) {
                task.task = newText
            }
        },

        removeTask: (state, action) => {
            const { day, id } = action.payload
            state.tasksByDay[day] = state.tasksByDay[day].filter(task => task.id !== id)
        }
    }
})

export const { addTask, toggleTask, removeTask, editTask } = todosSlice.actions

export default todosSlice.reducer