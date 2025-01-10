import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    batches: []
};

const batchesSlice = createSlice({
    name: "batches",
    initialState,
    reducers: {
        addBatches: (state, action) => {
            state.batches = action.payload
        }
    }
})

const [batchReducer, {addBatches}] = [batchesSlice.reducer, batchesSlice.actions];

export { addBatches }
export default batchReducer