import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    types: [],
    data: [],
    lastTypeExistData: {
        title: null,
        items: null,
        validate: false
    }
}

const productOptionSlice = createSlice({
    name: 'productOption',
    initialState,
    reducers: {
        createOptionAction: (state, action) => {
            console.log(action.payload)
            state.data = [...state.data, action.payload]
            state.lastTypeExistData.validate = true
        },
        editTypeTitleAction: (state, action) => {
            console.log(action.payload)
            state.lastTypeExistData.validate = false
            state.types[action.payload[0]] = action.payload[1]
            state.lastTypeExistData.title = state.types[state.types.length - 1]
        },
    },
})

export const { createOptionAction, editTypeTitleAction } = productOptionSlice.actions
export default productOptionSlice.reducer