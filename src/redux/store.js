import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import batchReducer from "./batchesSlice";
import courseReducer from "./courseSlice";
import instructorReducer from "./instructors";
import studentsReducer from "./studentSlice";
import materialReducer from "./materialsSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        batches: batchReducer,
        courses: courseReducer,
        students: studentsReducer,
        instructors: instructorReducer,
        materials: materialReducer
    }
})

export default store