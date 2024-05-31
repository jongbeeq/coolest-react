import { createSlice } from '@reduxjs/toolkit'

import { addAcessToken, removeAccesToken } from '../../utils/local-storage'
import { setProgress } from './loadingSlice'
import { loginModeTerm } from '../../config/env'
import asyncThunkPayloadCreator from '../../utils/asyncThunkPayloadCreator'
import log from '../../utils/log'

const initialState = {
    error: null,
    data: null,
    authMode: loginModeTerm
}

export const registerAction = asyncThunkPayloadCreator('auth/registerUser', { method: 'post', path: '/auth/register/user' }, (res) => {
    log(res)
    addAcessToken(res.data.accessToken)
    return res.data.account
})


export const loginAction = asyncThunkPayloadCreator('auth/login', { method: 'post', path: '/auth/login' }, (res) => {
    log(res)
    addAcessToken(res.data.accessToken)
    return res.data.account
})

export const getMeAction = asyncThunkPayloadCreator('auth/getMe', { method: 'get', path: '/auth' }, (res) => {
    log(res)
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
        switchAuthMode: (state, action) => {
            state.authMode = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerAction.pending, (state, action) => {
                log(action)
            })
            .addCase(registerAction.fulfilled, (state, action) => {
                log(action)
                state.data = action.payload
                setProgress(0)
            })
            .addCase(registerAction.rejected, (state, action) => {
                log(action)
                setProgress(0)
            })
            .addCase(loginAction.pending, (state, action) => {
                log(action)
            })
            .addCase(loginAction.fulfilled, (state, action) => {
                log(action)
                state.data = action.payload
                setProgress(0)
            })
            .addCase(loginAction.rejected, (state, action) => {
                log(action)
                setProgress(0)
            })
            .addCase(getMeAction.pending, (state, action) => {
                log(action)
                state.loading = true
            })
            .addCase(getMeAction.fulfilled, (state, action) => {
                log(action)
                state.data = action.payload
                setProgress(0)
            })
            .addCase(getMeAction.rejected, (state, action) => {
                log(action)
                state.error = action.error
                setProgress(0)
            })

    }
})


export const { logOut, switchAuthMode } = authSlice.actions
export default authSlice.reducer