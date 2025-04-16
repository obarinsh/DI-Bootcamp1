import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../features/slice'


const store = configureStore({
    reducer: {
        booksList: booksReducer
    }
})

export default store