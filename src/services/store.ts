import { configureStore } from '@reduxjs/toolkit'
import reduxApiMiddleware from './Middleware'
import thunk from 'redux-thunk'
import AuthSlice from './AuthSlice'
import UserSlice from './UserSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        user: UserSlice,
    },
    middleware: [thunk, reduxApiMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types