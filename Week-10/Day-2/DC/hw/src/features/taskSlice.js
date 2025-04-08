import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        date: '2024-04-04',
        tasks: [
            { id: '1', task: 'Buy waffles' }
        ]
    }
]

const taskSlice = createSlice({
    name: 'dailyTasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { date, newTask } = action.payload
            const day = state.find(d => d.date === date)

            if (day) {
                day.tasks.push(newTask)
            } else {
                state.push({ date, tasks: [newTask] })
            }
        },
        removeTask: (state, action) => {
            const { date, id } = action.payload
            const day = state.find(d => d.date === date)
            if (day) {
                day.tasks = day.tasks.filter(task => task.id !== id)
            }
        }
    },
    // editTask: (state, action) => {
    //     return state.map(tasks =>
    //         tasks.id === action.payload.id ? { ...tasks, ...action.payload } : tasks
    //     )
    // }

}
})

export const { addTask, removeTask } = taskSlice.actions

export default taskSlice.reducer