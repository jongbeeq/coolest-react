import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import asyncThunkPayloadCreator from "../../utils/asyncThunkPayloadCreator";
import { setProgress } from "./loadingSlice";
import log from "../../utils/log";

const initialState = {
    formData: new FormData(),
    error: {},
}

export const uploadProductAction = asyncThunkPayloadCreator('productUpload/createProduct',
    { method: 'post', path: '/product/create' },
    (res) => {
        log(res)
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
            log(action.payload)
            const key = Object.keys(action.payload)[0]
            if (key === 'images') {
                log('key ', key)
                state.formData.append(key, action.payload[key])
            } else {
                log('key not img ', key)
                action.payload[key] ?
                    state.formData.set(key, action.payload[key])
                    :
                    state.formData.delete(key)
            }
            let formData = {}
            for (let pair of state.formData.entries()) {
                log(pair[0], pair[1])
                formData[pair[0]] = pair[0] === 'images' ? (formData[pair[0]] ? [...formData[pair[0]], pair[1]] : [pair[1]]) : pair[1]
            }
            log('formData ', formData)
        },
        setErrorFormAction: (state, action) => {
            log(action.payload)
            state.error = { ...state.error, ...action.payload }
        },
        resetProductUpload: (state) => {
            state = initialState
            return state
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadProductAction.pending, (state, action) => {
                log(action)
            })
            .addCase(uploadProductAction.fulfilled, (state, action) => {
                log(action)
                state.data = action.payload
                setProgress(0)
            })
            .addCase(uploadProductAction.rejected, (state, action) => {
                log(action)
                setProgress(0)
            })
            .addCase(removeImagesUploadAction.fulfilled, (state, action) => {
                log(action.payload)
                action.payload.length ?
                    state.formData.set('images', action.payload)
                    :
                    state.formData.delete('images')
            })
    }
})

export const { changeInputUploadAction, setErrorFormAction, resetProductUpload } = productUploadSlice.actions
export default productUploadSlice.reducer