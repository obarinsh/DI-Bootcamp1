const initialState = [
    {
        day: 'Sunday',
        tasks: [
            {
                id: 1,
                task: 'Buy groceries'
            }
        ]
    },
    {
        day: 'Monday',
        tasks: []
    },
    {
        day: 'Tuesday',
        tasks: []
    },
    {
        day: 'Wednesday',
        tasks: []
    },
    {
        day: 'Thursday',
        tasks: []
    },
    {
        day: 'Friday',
        tasks: []
    },
    {
        day: 'Saturday',
        tasks: []
    }
]
export function taskReducer(state = initialState, action) {
    switch (action.type) {
        case 'addTask':
            return state.map(day =>
                day.day === action.payload.day
                    ? { ...day, tasks: [...day.tasks, action.payload.task] }
                    : day
            )
        case 'removeTask':
            return state.map(day =>
                day.day === action.payload.day
                    ? {
                        ...day,
                        tasks: day.tasks.filter(task => task.id !== action.payload.id)
                    }
                    : day
            )

            return state.filter(task => task.id !== action.payload)
        case 'editTask':
            return state.map(day =>
                day.day === action.payload.day
                    ? {
                        ...day,
                        tasks: day.tasks.map(task =>
                            task.id === action.payload.id
                                ? { ...task, task: action.payload.taskText }
                                : task
                        )
                    }
                    : day)
        default:
            return state



    }
}