import { IAdmin, ILoginApiParam } from '../Types/Entity/AuthEntity';
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_LOGIN, LOGIN_F, LOGIN_S, LS_AUTHORED, LS_USER } from "../constants";

export interface IAuthSlice {
  isLoading: boolean;
  isLoggedIn: boolean;
  userData: IAdmin | {};
  isSuperAdmin?: boolean;
}

const initialState: IAuthSlice = {
  isLoading: false,
  isLoggedIn: false,
  userData: {},
};

export const loginAction: any = (data: ILoginApiParam) => ({
  type: "API",
  payload: {
    url: API_LOGIN,
    method: "POST",
    data: data,
    hideLoader: false,
    success: (data) => ({
      type: LOGIN_S,
      payload: data,
    }),
    error: (data) => ({
      type: LOGIN_F,
      payload: {},
    }),
  },
});

// Reducer
const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    loaderChange: (state, payload) => {
      state.isLoading = payload.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LOGIN_S, (state, action: any) => {
      // Default header for auth
      axios.defaults.headers.common["Authorization"] = action.payload.data.token;
      localStorage.setItem(LS_AUTHORED, JSON.stringify(action.payload.data.token));
      localStorage.setItem(LS_USER, JSON.stringify(action.payload.data));

      state.userData = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(LOGIN_F, (state, action: any) => {
      // remove items on logout
      delete axios.defaults.headers.common['Authorization']
      localStorage.removeItem(LS_AUTHORED);
      localStorage.removeItem(LS_USER);

      state.userData = action.payload;
      state.isLoggedIn = false;
    });
  },
});

export const { loaderChange } = loginSlice.actions;
export default loginSlice.reducer;
