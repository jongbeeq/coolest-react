import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../config/axios'
import { addAcessToken, removeAccesToken } from '../../utils/local-storage'
import { setProgress } from './loadingSlice'
import { loginModeTerm } from '../../config/env'
import asyncThunkPayloadCreator from '../../utils/asyncThunkPayloadCreator'

const initialState = {
    error: null,
    data: null,
    authMode: loginModeTerm
}

// export const registerAction = createAsyncThunk("auth/registerUser",
//     async (registerData, { dispatch, getState }) => {
//         try {
//             const config = {
//                 onUploadProgress: (progressEvent) => {
//                     let progress = (progressEvent.loaded * 50) / progressEvent.total
//                     dispatch(setProgress(progress))
//                 },
//                 onDownloadProgress: (progressEvent) => {
//                     let previousLoading = getState().loading
//                     let progress = (progressEvent.loaded * 50) / progressEvent.total
//                     dispatch(setProgress(previousLoading + progress))
//                 }
//             }
//             dispatch(setError(null))
//             const res = await axios.post('/auth/register/user', registerData, config)
//             addAcessToken(res.data.accessToken)
//             return res.data.user
//         } catch (error) {
//             throw dispatch(setError(error.response.data))
//         } finally {
//             setTimeout(() => dispatch(setProgress(0)), 500)
//         }
//     }
// )

export const registerAction = asyncThunkPayloadCreator('auth/registerUser', { method: 'post', path: '/auth/register/user' }, (res) => {
    console.log(res)
    addAcessToken(res.data.accessToken)
    return res.data.account
})


export const loginAction = asyncThunkPayloadCreator('auth/login', { method: 'post', path: '/auth/login' }, (res) => {
    console.log(res)
    addAcessToken(res.data.accessToken)
    return res.data.account
})

export const getMeAction = asyncThunkPayloadCreator('auth/getMe', { method: 'get', path: '/auth' }, (res) => {
    console.log(res)
    return res.data.account
})


const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state) => {
            removeAccesToken()
            state.data = null
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        switchAuthMode: (state, action) => {
            state.authMode = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerAction.pending, (state, action) => {
                console.log(action)
            })
            .addCase(registerAction.fulfilled, (state, action) => {
                console.log(action)
                state.data = action.payload
                setProgress(0)
            })
            .addCase(registerAction.rejected, (state, action) => {
                console.log(action)
                setProgress(0)
            })
            .addCase(loginAction.pending, (state, action) => {
                console.log(action)
            })
            .addCase(loginAction.fulfilled, (state, action) => {
                console.log(action)
                state.data = action.payload
                setProgress(0)
            })
            .addCase(loginAction.rejected, (state, action) => {
                console.log(action)
                setProgress(0)
            })
            .addCase(getMeAction.pending, (state, action) => {
                console.log(action)
                state.loading = true
            })
            .addCase(getMeAction.fulfilled, (state, action) => {
                console.log(action)
                state.data = action.payload
                setProgress(0)
            })
            .addCase(getMeAction.rejected, (state, action) => {
                console.log(action)
                state.error = action.error
                setProgress(0)
            })

    }
})


export const { logOut, setError, switchAuthMode } = authSlice.actions
export default authSlice.reducer