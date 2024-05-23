import { createSlice } from "@reduxjs/toolkit";
import asyncThunkPayloadCreator from "../../utils/asyncThunkPayloadCreator";
import { setProgress } from "./loadingSlice";

const initialState = {
    formData: new FormData()
}

export const uploadProductAction = asyncThunkPayloadCreator('auth/registerUser',
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
            console.log(state.formData)
            for (let key in action.payload) {
                state.formData.set(key, action.payload[key])
            }
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

export const { changeInputUploadAction } = productUploadSlice.actions
export default productUploadSlice.reducer