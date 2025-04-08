import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    users: [
        { id: "hjsdhfj", name: "Jhon", email: "jjj@gmail.com" },
        { id: "1345bdrt6", name: "Anne", email: "aaa@gmail.com" },
        { id: "iismdjfhm", name: "Dan", email: "ddd@gmail.com" },
    ],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        adduser: (state, action) => {
            state.users.push({
                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email
            })
        },
        adduserprepare: {
            prepare(name, email) {
                return { payload: { id: nanoid(), name, email } }
            },
            reducer(state, action) {
                state.users.push9action.payload
            }
        }
    }
})


export const { adduser, adduserprepare } = usersSlice.actions

export default usersSlice.reducer