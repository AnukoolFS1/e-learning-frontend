import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    instructors:[]
};

const instructorSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addInstructor: (state, action) => {
            state.instructors = action.payload
        }
    }
})

const [instructorReducer, { addInstructor }] = [instructorSlice.reducer, instructorSlice.actions];

export { addInstructor }
export default instructorReducer