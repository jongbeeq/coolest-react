import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import loadingSlice from './slice/loadingSlice'
import productModeSlice from './slice/productModeSlice'
import productByIdSlice from './slice/productByIdSlice'
import productUploadSlice from './slice/productUploadSlice'
import productImageSlice from './slice/productImageSlice'
import productSelectSlice from './slice/productSelectSlice'
import errorSlice from './slice/errorSlice'

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ["productUpload/changeInputUploadAction", 'productUpload/removeImagesUploadAction/fulfilled', 'productImage/initializeImage', 'productImage/setShowImage'],
                // Ignore these paths in the state
                ignoredPaths: ['productUpload', 'productImage'],
            },
        }),
    reducer: {
        account: authSlice,
        loading: loadingSlice,
        error: errorSlice,
        productMode: productModeSlice,
        productById: productByIdSlice,
        productImage: productImageSlice,
        productUpload: productUploadSlice,
        productSelect: productSelectSlice,
    }
})

export default store