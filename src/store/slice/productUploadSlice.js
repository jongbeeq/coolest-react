import { createSlice } from "@reduxjs/toolkit";
import asyncThunkPayloadCreator from "../../utils/asyncThunkPayloadCreator";
import { setProgress } from "./loadingSlice";

const initialState = {
    formData: new FormData(),
    error: {}
}

export const uploadProductAction = asyncThunkPayloadCreator('productUpload/createProduct',
    { method: 'post', path: '/product/create' },
    (res) => {
        console.log(res)
        return res.data
    }
)

const productUploadSlice = createSlice({
    name: 'productUpload',
    initialState,
    reducers: {
        changeInputUploadAction: (state, action) => {
            console.log(action.payload)
            for (let key in action.payload) {
                if (key === 'images') {
                    state.formData.append(key, action.payload[key])
                } else {
                    state.formData.set(key, action.payload[key])
                }
            }
            state.countChange++
        },
        setErrorFormAction: (state, action) => {
            console.log(action.payload)
            state.error = { ...state.error, ...action.payload }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadProductAction.pending, (state, action) => {
                console.log(action)
            })
            .addCase(uploadProductAction.fulfilled, (state, action) => {
                console.log(action)
                state.data = action.payload
                setProgress(0)
            })
            .addCase(uploadProductAction.rejected, (state, action) => {
                console.log(action)
                setProgress(0)
            })
    }
})

export const { changeInputUploadAction, setErrorFormAction } = productUploadSlice.actions
export default productUploadSlice.reducer