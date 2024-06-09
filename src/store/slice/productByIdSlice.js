import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fetchData: {},
    createOrUpdateData: {},
    deleteData: {}
}

const productByIdSlice = createSlice({
    name: 'productById',
    initialState,
    reducers: {
        setProductData: (state, action) => {
            return state = action.payload
        },
        createTitleDescriptionAction: (state, action) => {
            const prevData = state.createOrUpdateData
            const newData = action.payload
            state.createOrUpdateData = { ...prevData, ...newData }
        },
        createPriceAction: (state, action) => {
            const prevData = state.createOrUpdateData
            const newData = action.payload
            state.createOrUpdateData = { ...prevData, ...newData }
        },
        createBalanceAction: (state, action) => {
            const prevData = state.createOrUpdateData
            const newData = action.payload
            state.createOrUpdateData = { ...prevData, ...newData }
        },
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

export const { setProductData, createTitleDescriptionAction, createPriceAction, createBalanceAction } = productByIdSlice.actions
export default productByIdSlice.reducer