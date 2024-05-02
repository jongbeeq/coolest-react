import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../config/axios'
import { addAcessToken } from '../../utils/local-storage'
import { setProgress } from './loadingSlice'

const initialState = {
    error: null,
    loading: true,
    data: null,
}

export const registerAction = createAsyncThunk("auth/register",
    async (registerData, { dispatch, getState }) => {
        try {
            // console.log(setLoading)
            // console.log(previousLoading)
            // console.log(getState())
            // dispatch(setProgress(55))
            // console.log('qweqwe')

            const config = {
                onUploadProgress: (progressEvent) => {
                    console.log({ ...progressEvent })
                    let progress = (progressEvent.loaded * 50) / progressEvent.total
                    dispatch(setProgress(progress))
                },
                onDownloadProgress: (progressEvent) => {
                    console.log({ ...progressEvent })
                    let previousLoading = getState().loading
                    console.log(previousLoading)
                    let progress = (progressEvent.loaded * 50) / progressEvent.total
                    dispatch(setProgress(previousLoading + progress))
                }
            }
            console.log('GGG EZ')
            const res = await axios.post('/auth/register', registerData, config)
            console.log(res)
            console.log(res.headers.get('content-length'))
            const contentLength = res.headers.get('content-length')
            const reader = res.body
            // const readableStream = new ReadableStream({
            //     start(controller) {
            //         // const 
            //     }
            // })
            // console.log(readableStream)
            console.log(res.headers)
            console.log(contentLength)
            console.log(reader)
            // console.log(await fetch('https://picsum.photos/400/400'))
            addAcessToken(res.data.accessToken)
            return res.data.user
        } catch (error) {
            console.log(error)
            throw error.response.data
        }
    }
)

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerAction.pending, (state, action) => {
                console.log(action)
                state.loading = true
            })
            .addCase(registerAction.fulfilled, (state, action) => {
                console.log(action)
                state.loading = false
                state.data = action.payload
            })
            .addCase(registerAction.rejected, (state, action) => {
                console.log(action)
                state.loading = false
                state.error = action.error.message
            })

    }
})

export default authSlice.reducer