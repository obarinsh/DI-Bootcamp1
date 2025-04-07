

export const addTask = (day, taskText) => {
    return {
        type: 'addTask',
        payload: day, taskText
    }
}

export const removeTask = (day, id) => {
    return {
        type: 'removeTask',
        payload: day, id
    }
}

export const editTask = (day, id) => {
    return {
        type: 'editTask',
        payload: day, id
    }
}