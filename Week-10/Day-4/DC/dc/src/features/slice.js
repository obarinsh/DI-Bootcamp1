// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// export const ageUpAsync = createAsyncThunk('age/up', async (amount) => {
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     return amount
// })

// export const ageDownAsync = createAsyncThunk('age/down', async (amount) => {
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     return amount
// })


// const initialState = {
//     age: 0,
//     loading: false
// }

// const ageSlice = createSlice({
//     name: 'ageList',
//     initialState,
//     reducers: {
//         setAge: (state, action) => {
//             state.age = action.payload
//         },
//         setLoading: (state, action) => {
//             state.loading = action.payload
//         },
//         resetState: () => initialState
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(ageUpAsync.pending, (state) => {
//                 state.loading = true
//             })
//             .addCase(ageUpAsync.fulfilled, (state, action) => {
//                 state.age += action.payload
//                 state.loading = false
//             })
//             .addCase(ageUpAsync.rejected, (state) => {
//                 state.loading = false
//             })
//             .addCase(ageDownAsync.pending, (state) => {
//                 state.loading = true
//             })
//             .addCase(ageDownAsync.fulfilled, (state, action) => {
//                 state.age -= action.payload
//                 state.loading = false
//             })
//             .addCase(ageDownAsync.rejected, (state) => {
//                 state.loading = false
//             })
//     }
// })


// export const { setAge, setLoading, resetState } = ageSlice.actions
// export default ageSlice.reducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const ageUpAsync = createAsyncThunk('age/up', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return 1
})

export const ageDownAsync = createAsyncThunk('age/down', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return 1
})

const initialState = {
    age: 0,
    loading: false
}

const ageSlice = createSlice({
    name: 'ageList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ageUpAsync.pending, (state) => {
                state.loading = true
            })
            .addCase(ageUpAsync.fulfilled, (state, action) => {
                state.age += action.payload
                state.loading = false
            })
            .addCase(ageDownAsync.pending, (state) => {
                state.loading = true
            })
            .addCase(ageDownAsync.fulfilled, (state, action) => {
                state.age -= action.payload
                state.loading = false
            })
    }
})

export default ageSlice.reducer