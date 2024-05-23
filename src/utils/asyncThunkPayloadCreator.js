import { createAsyncThunk } from "@reduxjs/toolkit"
import { setProgress } from "../store/slice/loadingSlice"
import axios from '../config/axios'
import { setError } from "../store/slice/errorSlice"

export default function asyncThunkPayloadCreator(typePrefix, apiFn, otherFn) {
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
