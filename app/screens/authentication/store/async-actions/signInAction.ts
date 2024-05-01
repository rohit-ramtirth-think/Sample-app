import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../../redux/store/storeConfig";
import { AuthService } from "../services/AuthService";
import { AUTH_REDUCER } from "../../../../redux/constants/StoreConstants";
import { AuthInteractorImpl } from "../interactor/AuthInteractor";


export const signInAction = createAsyncThunk<any, any, { state: RootState }>(AUTH_REDUCER + '/login', async ({ username, password }, thunkApi) => {
     console.log(username,password)
    const response = AuthInteractorImpl.getInstance().loginUser(username, password)
    console.log(response)
    return response
})