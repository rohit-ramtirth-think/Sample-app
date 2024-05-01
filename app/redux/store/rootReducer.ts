import { Reducer, combineReducers } from "@reduxjs/toolkit";
import { AppState } from "../interfaces/AppState";
import authReducer from "../../screens/authentication/store/reducer/AuthReducer"

export const rootReducer : Reducer<AppState> = combineReducers({
    auth : authReducer,
})