import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    materials: [],
    materialsDetails: {}
};

const materialSlice = createSlice({
    name: "batches",
    initialState,
    reducers: {
        addMaterials: (state, action) => {
            state.materials = action.payload
        },
        updateMaterailDetails: (state, action) => {
            state.materialsDetails = action.payload
        }
    }
})

const [materialReducer, {addMaterials, updateMaterailDetails}] = [materialSlice.reducer, materialSlice.actions];

export { addMaterials, updateMaterailDetails }
export default materialReducer