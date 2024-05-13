import { createSlice } from "@reduxjs/toolkit";

const initialState = 0

const productByIdSlice = createSlice({
    name: 'productById',
    initialState,
    reducers: {
        // logOut: (state) => {
        //     removeAccesToken()
        //     state.data = null
        // },
        setError: (state, action) => {
            return state.error = action.payload
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

export default productByIdSlice.reducer