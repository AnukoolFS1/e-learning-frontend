import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    name: "",
    email: "",
    phone: "",
    role: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state = action.payload
        }
    }
})

const {addUser} = userSlice.actions

export {addUser}
export default userSlice.reducer