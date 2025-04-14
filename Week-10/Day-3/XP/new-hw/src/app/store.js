import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/usersSlice'

const store = configureStore({
    reducer: {
        userdata: usersReducer
    }
})

export default store