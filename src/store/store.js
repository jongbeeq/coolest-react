import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'

const store = configureStore({
    reducer: {
        user: authSlice
    }
})

export default store