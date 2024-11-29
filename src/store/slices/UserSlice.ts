import { createSlice } from "@reduxjs/toolkit"


const intialValue = {
    user: null,
    isAuthed: false,
}

const UserSlice = createSlice({
    name: 'user',
    initialState: intialValue,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuthed = true
        },
        removeUser: (state) => {
            state.user = null
            state.isAuthed = false
        },
        setUnAuth: (state) => {
            state.isAuthed = false
        }

    }
})


export const { setUser, removeUser , setUnAuth } = UserSlice.actions
export default UserSlice.reducer