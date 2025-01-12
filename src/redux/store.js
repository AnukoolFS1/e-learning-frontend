import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import batchReducer from "./batchesSlice";
import courseReducer from "./courseSlice";
import usersReducer from "./studentSlice";
import materialReducer from "./materialsSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        batches: batchReducer,
        courses: courseReducer,
        users: usersReducer,
        materials: materialReducer
    }
})

export default store