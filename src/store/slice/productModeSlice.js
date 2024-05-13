import { createSlice } from "@reduxjs/toolkit";
import { viewProductModeTerm } from "../../config/env";

const initialState = viewProductModeTerm

const productModeSlice = createSlice({
    name: 'productMode',
    initialState,
    reducers: {
        switchproductModeAction: (state, action) => {
            return state = action.payload
        }
    },
})

export const { switchproductModeAction } = productModeSlice.actions
export default productModeSlice.reducer