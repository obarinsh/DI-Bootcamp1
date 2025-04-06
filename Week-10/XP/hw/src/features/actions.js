

export const addTask = (taskText) => {
    return {
        type: 'addTask',
        payload: taskText
    }
}

export const removeTask = (id) => {
    return {
        type: 'removeTask',
        payload: id
    }
}

export const toggleStatus = (id) => {
    return {
        type: 'toggleStatus',
        payload: id
    }
}