import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import asyncThunkPayloadCreator from "../../utils/asyncThunkPayloadCreator";
import { setProgress } from "./loadingSlice";

const initialState = {
    formData: new FormData(),
    error: {},
}

export const uploadProductAction = asyncThunkPayloadCreator('productUpload/createProduct',
    { method: 'post', path: '/product/create' },
    (res) => {
        console.log(res)
        return res.data
    }
)

export const removeImagesUploadAction = createAsyncThunk('productUpload/removeImagesUploadAction',
    (data, { getState }) => {
        const newImagesUpload = getState().productImage.data.map(img => img.file)
        return newImagesUpload
    })

const productUploadSlice = createSlice({
    name: 'productUpload',
    initialState,
    reducers: {
        changeInputUploadAction: (state, action) => {
            console.log(action.payload)
            const key = Object.keys(action.payload)[0]
            // if (key === 'images' || key === 'types') {
            if (key === 'images' || key === 'types') {
                action.payload[key].length ?
                    state.formData.append(key, action.payload[key])
                    :
                    state.formData.delete(key)
            } else {
                action.payload[key] ?
                    state.formData.set(key, action.payload[key])
                    :
                    state.formData.delete(key)
            }
            for (let pair of state.formData.entries()) {
                console.log(pair[0], pair[1])
            }
        },
        setErrorFormAction: (state, action) => {
            console.log(action.payload)
            state.error = { ...state.error, ...action.payload }
        },
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
            .addCase(removeImagesUploadAction.fulfilled, (state, action) => {
                console.log(action.payload)
                action.payload.length ?
                    state.formData.set('images', action.payload)
                    :
                    state.formData.delete('images')
            })
    }
})

export const { changeInputUploadAction, setErrorFormAction } = productUploadSlice.actions
export default productUploadSlice.reducer