import { createSlice } from "@reduxjs/toolkit";
import log from "../../utils/log";

const initialState = {}

const productByIdSlice = createSlice({
    name: 'productById',
    initialState,
    reducers: {
        setProductData: (state, action) => {
            log(action.payload)
            return state = action.payload
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(registerAction.pending, (state, action) => {
    //             log(action)
    //             state.loading = true
    //         })
    //         .addCase(registerAction.fulfilled, (state, action) => {
    //             log(action)
    //             state.loading = false
    //             state.data = action.payload
    //         })
    //         .addCase(registerAction.rejected, (state, action) => {
    //             log(action)
    //             state.loading = false
    //         })
    // }
})

export const { setProductData } = productByIdSlice.actions
export default productByIdSlice.reducer