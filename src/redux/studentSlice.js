import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students:[],
    instructors:[],
    currentDisplayUser: {}
};

const studentsSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addStudents: (state, action) => {
            state.students = action.payload
        },
        addInstructor: (state, action) => {
            state.instructors = action.payload
        },
        updateDisplayUser: (state, action) => {
            state.currentDisplayUser = action.payload
        }
    }
})

const [usersReducer, { addStudents, addInstructor, updateDisplayUser }] = [studentsSlice.reducer, studentsSlice.actions];

export { addStudents, addInstructor, updateDisplayUser }
export default usersReducer