import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../config/axios'
import { addAcessToken } from '../../utils/local-storage'

const initialState = {
    error: null,
    loading: true,
    data: null,
}

export const registerAction = createAsyncThunk("auth/register",
    async (registerData) => {
        try {
            console.log('GGG EZ')
            const res = await axios.post('/auth/register', registerData)
            // console.log(res)
            // console.log(res.headers.get('content-length'))
            // const contentLength = res.headers.get('content-length')
            // const readableStream = newnew ReadableStream({
            //     start(controller) {

            //     }
            // })
            // console.log(readableStream)
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