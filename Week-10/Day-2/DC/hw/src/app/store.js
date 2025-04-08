import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/taskSlice'


const store = configureStore({
    reducer: {
        dailyTasks: taskReducer
    }
})

export default store