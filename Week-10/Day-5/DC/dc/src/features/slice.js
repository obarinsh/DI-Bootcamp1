
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'


const initialState = [{
    id: nanoid(),
    description: 'Wash the dishes',
    category: 'Home',
    isCompleted: false
}, {
    id: nanoid(),
    description: 'Clean the board',
    category: 'Work',
    isCompleted: false
}]


const tasksSlice = createSlice({
    name: 'tasksList',
    initialState,
    reducers: {
        addNewTask: (state, action) => {
            state.push({
                id: nanoid(),
                description: action.payload.description,
                category: action.payload.category,
                isCompleted: false
            })
        },
        editTask: (state, action) => {
            const { id, editedTask } = action.payload
            const task = state.find(task => task.id === id)
            if (task) {
                Object.assign(task, editedTask)
            }
        },
        deleteTask: (state, action) => {
            const { id } = action.payload
            return state.filter((task) => task.id !== id)
        },
        updateProgress: (state, action) => {
            const { id } = action.payload
            const task = state.find((task) => task.id === id)
            if (task) {
                task.isCompleted = !task.isCompleted
            }
        },
        deleteCathegory: (state, action) => {
            state.error = action.payload
            state.data = null
        }
    }
})

export const { addNewTask, editTask, deleteTask, updateProgress, deleteCathegory } = tasksSlice.actions


export const selectAllTasks = (state) => state.tasksList


export default tasksSlice.reducer