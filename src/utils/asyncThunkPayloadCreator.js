import { createAsyncThunk } from "@reduxjs/toolkit"
import { setProgress } from "../store/slice/loadingSlice"
import { setError } from "../store/slice/authSlice"
import axios from '../config/axios'

export default function asyncThunkPayloadCreator(typePrefix, apiFn, otherFn) {
    // const { typePrefix, apiFn, otherFn } = props
    console.log(typePrefix)
    console.log(apiFn)
    console.log(otherFn)
    const { method, path } = apiFn

    const haveBody = method !== ('get' || 'delete')

    return createAsyncThunk(typePrefix,
        async (apiData, { dispatch, getState }) => {
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

                dispatch(setError(null))

                const res = haveBody ? await axios[method](path, apiData, config) : await axios[method](path, config)

                return otherFn(res)
            } catch (error) {
                throw dispatch(setError(error.response.data))
            } finally {
                setTimeout(() => dispatch(setProgress(0)), 500)
            }
        }
    )
}
