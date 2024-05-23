import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action) => {
            state = action.payload
        },
    }
})

export const { setError } = errorSlice.actions
export default errorSlice.reducer