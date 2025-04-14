import { configureStore } from '@reduxjs/toolkit'
import ageReducer from '../features/slice'


const store = configureStore({
    reducer: {
        ageList: ageReducer
    }
})

export default store