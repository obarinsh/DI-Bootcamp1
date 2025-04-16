import { createSelector } from '@reduxjs/toolkit'

export const selectAllTasks = (state) => state.tasksList

export const selectTasksByCategory = (category) => createSelector(
    [selectAllTasks],
    (tasks) => tasks.filter(task => task.category === category)
)

export const selectCompletedTasks = createSelector(
    [selectAllTasks],
    (tasks) => tasks.filter(task => task.isCompleted)
)
