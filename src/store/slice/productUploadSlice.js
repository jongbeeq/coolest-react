import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: {}
}

const productUploadSlice = createSlice({
    name: 'productUpload',
    initialState,
    reducers: {
        changeUploadAction: (state, action) => {
            console.log(action)
            const prevData = state.formData
            const newData = action.payload
            state.formData = { ...prevData, ...newData }
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

export const { changeUploadAction } = productUploadSlice.actions
export default productUploadSlice.reducer