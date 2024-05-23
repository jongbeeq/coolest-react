import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    showImage: {},
    slidePage: 0,
    totalPage: 0,
}

const productImageSlice = createSlice({
    name: 'productImage',
    initialState,
    reducers: {
        initializeImage: (state, action) => {
            state.data = action.payload
            state.showImage = action.payload[0]
            state.totalPage = Math.ceil(action.payload.length / 4)
        },
        setShowImage: (state, action) => {
            state.showImage = action.payload
        },
        slidePageDown: (state) => {
            const isLastPage = state.slidePage === state.totalPage - 1
            state.slidePage = isLastPage ? 0 : state.slidePage + 1
        },
        slidePageUp: (state) => {
            const isFirstPage = state.slidePage === 0
            state.slidePage = isFirstPage ? state.totalPage - 1 : state.slidePage - 1
        },
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

export const { initializeImage, setShowImage, slidePageDown, slidePageUp } = productImageSlice.actions
export default productImageSlice.reducer