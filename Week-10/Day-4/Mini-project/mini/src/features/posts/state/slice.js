import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const PORT_URL = "https://jsonplaceholder.typicode.com/posts"
const USERS_URL = "https://jsonplaceholder.typicode.com/posts"

const initialState = {
    posts: [],
    status: ""
}


export const fetchPosts = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get(PORT_URL)
    return response.data
})

export const fetchUsers = createAsyncThunk('posts/fetch', async () => {
    const response = await axios.get(USERS_URL)
    return response.data
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "success"
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.status = "failed"
            })
    },
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUserss.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "success"
                state.users = action.payload
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.status = "failed"
            })
    },
})

export const state

export default postSlice.reducer