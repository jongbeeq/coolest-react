import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const productByIdSlice = createSlice({
    name: 'productById',
    initialState,
    reducers: {
        setProductData: (state, action) => {
            console.log(action.payload)
            return state = action.payload
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(registerAction.pending, (state, action) => {
    //             console.log(action)
    //             state.loading = true
    //         })
    //         .addCase(registerAction.fulfilled, (state, action) => {
    //             console.log(action)
    //             state.loading = false
    //             state.data = action.payload
    //         })
    //         .addCase(registerAction.rejected, (state, action) => {
    //             console.log(action)
    //             state.loading = false
    //         })
    // }
})

export const { setProductData } = productByIdSlice.actions
export default productByIdSlice.reducer