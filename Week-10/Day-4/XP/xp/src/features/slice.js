
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    data: null,
    error: null
}


const usersSlice = createSlice({
    name: 'usersList',
    initialState,
    reducers: {
        fetchUsersSuccess: (state, action) => {
            state.data = action.payload
            state.error = null
        },
        fetchUsersFail: (state, action) => {
            state.error = action.payload
            state.data = null
        }
    }
})

export const { fetchUsersSuccess, fetchUsersFail } = usersSlice.actions
export const fetchUser = (userId) => {
    return async (dispatch) => {
        console.log('🔍 fetchUser thunk started')
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            if (!response.ok) {
                throw new Error('Failed to fetch users')
            }
            const data = await response.json()
            dispatch(fetchUsersSuccess(data))
        } catch (error) {
            dispatch(fetchUsersFail(error.message))
        }
    }

}

export default usersSlice.reducer