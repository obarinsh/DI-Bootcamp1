import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/slice'


const store = configureStore({
    reducer: {
        usersList: usersReducer
    }
})

export default store