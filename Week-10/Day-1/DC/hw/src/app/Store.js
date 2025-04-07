import { createStore } from 'redux'
import { taskReducer } from '../features/reducer'
const store = createStore(taskReducer)

export default store