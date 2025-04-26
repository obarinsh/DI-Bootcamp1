
import { DataState, Recipe } from '../types/types.ts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: DataState = {
    recipes: [],
    loading: false,
    error: null
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        fetchLoading(state) {
            state.loading = true
            state.error = null
        },
        fetchSuccess(state, action: PayloadAction<Recipe[]>) {
            state.recipes = action.payload
            state.loading = false
        },
        fetchFailed(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { fetchLoading, fetchSuccess, fetchFailed } = dataSlice.actions
export default dataSlice.reducer