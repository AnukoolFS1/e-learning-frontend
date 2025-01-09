import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const instructorSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addInstructor: (state, action) => {
            state = action.payload
        }
    }
})

const [instructorReducer, { addInstructor }] = [instructorSlice.reducer, instructorSlice.actions];

export { addInstructor }
export default instructorReducer