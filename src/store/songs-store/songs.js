import { configureStore } from '@reduxjs/toolkit'
import songReducer from '../slices/slice'
import authReducer from '../slices/auth.js'

export default configureStore({
  reducer: {
    song:songReducer,
    auth:authReducer
  },
})