import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = []

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: nanoid(),
                task: action.payload.task,
                isCompleted: false
            })
        },
        toggleTask: (state, action) => {
            const task = state.find(task => task.id === action.payload.id)
            if (!task) return
            if (!task.isCompleted) {
                task.isCompleted = true
            } else {
                task.isCompleted = false
            }



        },
        removeTask: (state, action) => {
            return state.filter(task => task.id !== action.payload.id)
        }


    }
})

export const { addTask, toggleTask, removeTask } = todosSlice.actions

export default todosSlice.reducer