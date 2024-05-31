import { createSlice } from '@reduxjs/toolkit'
import log from '../../utils/log'

const initialState = 0

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setProgress: (state, action) => {
            log(action)
            state = action.payload
            return state
        }
    }
})

export const { setProgress } = loadingSlice.actions
export default loadingSlice.reducer