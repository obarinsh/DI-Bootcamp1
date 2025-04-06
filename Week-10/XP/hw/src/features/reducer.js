
export const addTask = (text) => ({ type: 'addTask', payload: text })
export const removeTask = (id) => ({ type: 'removeTask', payload: id })
export const toggleStatus = (id) => ({ type: 'toggleStatus', payload: id })

// let taskList = []
// const addTask = (taskInput) => {
//     let newTask = {
//         id: Date.now(),
//         task: taskInput.value,
//         completed: false
//     }
//     taskList.push(newTask)
//     return taskList
// }


// const removeTask = (id) => {
//     taskList = taskList.filter(task => task.id !== id)
//     return taskList
// }

// const toggleStatus = (id) => {
//     taskList = taskList.map(task =>
//         task.id === id ? { ...task, completed: !task.completed } : task)
//     return taskList
// }

export function taskReducer(state = [], action) {
    switch (action.type) {
        case 'addTask':
            return [...state, { id: Date.now(), task: action.payload, completed: false }]
        case 'removeTask':
            return state.filter(task => task.id !== action.payload)
        case 'toggleStatus':
            return state.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            )
        default:
            return state
    }
}