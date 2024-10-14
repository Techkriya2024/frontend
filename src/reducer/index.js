import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import profileReducer from './slices/profileSlice'

const rootReducer = combineReducers({
    Auth:authReducer,
    Profile:profileReducer,
})

export default rootReducer