import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: []
};

const courseSlice = createSlice({
    name: "batches",
    initialState,
    reducers: {
        addCourses: (state, action) => {
            state.courses = action.payload
        }
    }
})

const [courseReducer, { addCourses }] = [courseSlice.reducer, courseSlice.actions];

export { addCourses }
export default courseReducer