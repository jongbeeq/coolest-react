import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setProgress: (state, action) => {
            console.log(action)
            state = action.payload
            return state
        }
    }
})

export const { setProgress } = loadingSlice.actions
export default loadingSlice.reducer