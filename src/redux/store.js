import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import batchReducer from "./batchesSlice";
import courseReducer from "./courseSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        batches: batchReducer,
        courses: courseReducer 
    }
})

export default store