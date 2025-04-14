

import { createStore, combineReducers } from 'redux'
import { taskReducer } from '../features/reducer'

const rootReducer = combineReducers({
    week: taskReducer
})

const store = createStore(rootReducer)
export default store