import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const courseSlice = createSlice({
    name: "batches",
    initialState,
    reducers: {
        addCourses: (state, action) => {
            state = action.payload
        }
    }
})

const [courseReducer, { addCourses }] = [courseSlice.reducer, courseSlice.actions];

export { addCourses }
export default courseReducer