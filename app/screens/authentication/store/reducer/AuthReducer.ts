import { createSlice } from "@reduxjs/toolkit";
import { signInAction } from "../async-actions/signInAction";
import { AUTH_REDUCER } from "../../../../redux/constants/StoreConstants";
import { AuthInteractorImpl } from "../interactor/AuthInteractor";

const initialState = AuthInteractorImpl.getInstance().initialState()

const AuthReducer = createSlice({
    name: AUTH_REDUCER,
    initialState,
    reducers: {
        login: (state, action) => {
            state.loggedIn = true
        },
        logout: (state) => {
            state.loggedIn = false
            state.loginData = initialState.loginData
        },
    },
    extraReducers: builder => {
        builder
            .addCase(signInAction.pending, (state, action) => {
                state.loading = true
            })
            .addCase(signInAction.fulfilled, (state, action) => {
                state.loginData = action.payload
                state.loggedIn = true
                state.loading = false
            })
            .addCase(signInAction.rejected, (state, action) => {
                state.loading = true
                state.error = true
            })
    }

})

export const { logout } = AuthReducer.actions;
export default AuthReducer.reducer