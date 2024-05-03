import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../config/axios'
import { addAcessToken, removeAccesToken } from '../../utils/local-storage'
import { setProgress } from './loadingSlice'

const initialState = {
    error: null,
    loading: true,
    data: null,
}

export const registerAction = createAsyncThunk("auth/register",
    async (registerData, { dispatch, getState }) => {
        try {
            const config = {
                onUploadProgress: (progressEvent) => {
                    let progress = (progressEvent.loaded * 50) / progressEvent.total
                    dispatch(setProgress(progress))
                },
                onDownloadProgress: (progressEvent) => {
                    let previousLoading = getState().loading
                    let progress = (progressEvent.loaded * 50) / progressEvent.total
                    dispatch(setProgress(previousLoading + progress))
                }
            }
            const res = await axios.post('/auth/register', registerData, config)
            addAcessToken(res.data.accessToken)
            return res.data.user
        } catch (error) {
            throw error.response.data
        } finally {
            setTimeout(() => dispatch(setProgress(0)), 500)
        }
    }
)

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state) => {
            removeAccesToken()
            state.data = null
        }
    },
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


export const { logOut } = authSlice.actions
export default authSlice.reducer