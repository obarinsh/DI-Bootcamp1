
export const addTask = (day, task) => ({
    type: 'addTask',
    payload: { day, task }
})

export const removeTask = (day, id) => ({
    type: 'removeTask',
    payload: { day, id }
})

export const editTask = (day, id, newText) => ({
    type: 'editTask',
    payload: { day, id, newText }
})