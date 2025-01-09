import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const batchesSlice = createSlice({
    name: "batches",
    initialState,
    reducers: {
        addBatches: (state, action) => {
            state = action.payload
        }
    }
})

const [batchReducer, {addBatches}] = [batchesSlice.reducer, batchesSlice.actions];

export { addBatches }
export default batchReducer