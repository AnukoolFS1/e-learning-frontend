import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students:[]
};

const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addStudents: (state, action) => {
            state.students = action.payload
        }
    }
})

const [studentsReducer, { addStudents }] = [studentsSlice.reducer, studentsSlice.actions];

export { addStudents }
export default studentsReducer