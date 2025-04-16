import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/slice'


const store = configureStore({
    reducer: {
        tasksList: tasksReducer
    }
})

export default store