import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    batches: [],
    batchDetails: {}
};

const batchesSlice = createSlice({
    name: "batches",
    initialState,
    reducers: {
        addBatches: (state, action) => {
            state.batches = action.payload
        },
        updateBatchDetails: (state, action) => {
            state.batchDetails = action.payload
        }
    }
})

const [batchReducer, {addBatches, updateBatchDetails}] = [batchesSlice.reducer, batchesSlice.actions];

export { addBatches, updateBatchDetails }
export default batchReducer