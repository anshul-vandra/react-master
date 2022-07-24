import { configureStore } from '@reduxjs/toolkit'
import apiMiddleware from '../middleware/api'
import thunk from 'redux-thunk'
import AuthSlice from './AuthSlice'

export const store = configureStore({
    reducer: {
        auth: AuthSlice
    },
    middleware: [thunk, apiMiddleware]
}) 