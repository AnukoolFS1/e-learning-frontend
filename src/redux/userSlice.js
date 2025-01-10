import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
        id: "",
        name: "",
        email: "",
        phone: "",
        role: ""
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        }
    }
})

const {addUser} = userSlice.actions

export {addUser}
export default userSlice.reducer