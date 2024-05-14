import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import loadingSlice from './slice/loadingSlice'
import productModeSlice from './slice/productModeSlice'
import productByIdSlice from './slice/productByIdSlice'
import productUploadSlice from './slice/productUploadSlice'

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ["productUpload/changeUploadAction"],
                // Ignore these field paths in all actions
                // ignoredActionPaths: ['payload'],
                // Ignore these paths in the state
                ignoredPaths: ['productUpload.formData'],
            },
        }),
    reducer: {
        account: authSlice,
        loading: loadingSlice,
        productMode: productModeSlice,
        productById: productByIdSlice,
        productUpload: productUploadSlice,
    }
})

export default store