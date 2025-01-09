import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addStudents: (state, action) => {
            state = action.payload
        }
    }
})

const [studentsReducer, { addStudents }] = [studentsSlice.reducer, studentsSlice.actions];

export { addStudents }
export default studentsReducer