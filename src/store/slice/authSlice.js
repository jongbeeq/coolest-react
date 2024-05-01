import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    error: null,
    loading: true,
    data: null,
}

export const registerAction = createAsyncThunk("auth/register",
    (input) => { throw input }
)

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerAction.fulfilled, (state, action) => {
            console.log(action)
            state.data = action.payload
        })
    }
})

export default authSlice.reducer