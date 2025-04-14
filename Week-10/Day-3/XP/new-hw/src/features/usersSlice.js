import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
    data: null,
    error: null
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUserStart: (state, action) => {
            state.data = action.payload
            state.error = null
        },
        fetchUserFailure: (state, action) => {
            state.error = action.payload
            state.data = null
        }
    }

})

export function fetchUser(userId) {
    async (dispatch) => {
        try {
            const response = await fetch(`https://api.example.com/users/${userId}`)
            if (!response.ok) {
                throw new Error('Failed to fetch user')
            }

            const data = await response.json()
            dispatch(fetchUserSuccess(data))
        } catch (error) {
            dispatch(fetchUserError(error.message))
        }
    }

}

export const { fetchUserStart, fetchUserFailure } = usersSlice.actions

export default usersSlice.reducer