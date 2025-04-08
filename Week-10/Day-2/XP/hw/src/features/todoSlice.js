import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    id: 0,
    task: 'Add a new task',
    isCompleted: false,
}
]
const toDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) {
                todo.isCompleted = !todo.isCompleted
            }
        }
    }
})

export const { addTodo, removeTodo, toggleTodo } = toDoSlice.actions

export default toDoSlice.reducer