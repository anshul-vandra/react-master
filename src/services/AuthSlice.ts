import { IAdmin, ILoginApiParam } from '../Types/Entity/AuthEntity';
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LS_AUTHORED, LS_USER } from "../constants";
import { API_LOGIN } from "../constants/api";

export interface IAuthSlice {
  isLoading: boolean;
  isLoggedIn: boolean;
  userData: IAdmin;
  isSuperAdmin?: boolean;
}

const DEFAULT_USER_DATA: IAdmin = {
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  token: '',
}

const initialState: IAuthSlice = {
  isLoading: false,
  isLoggedIn: false,
  userData: DEFAULT_USER_DATA
};

export const loginAction: any = (data: ILoginApiParam) => ({
  type: "API",
  payload: {
    url: API_LOGIN,
    method: "POST",
    data: data,
    hideLoader: false,
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
    authSuccess: (state, action) => {
      axios.defaults.headers.common["Authorization"] = action.payload.data.token;
      localStorage.setItem(LS_AUTHORED, JSON.stringify(action.payload.data.token));
      localStorage.setItem(LS_USER, JSON.stringify(action.payload.data));

      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    authFail: (state, action) => {
      delete axios.defaults.headers.common['Authorization']
      localStorage.removeItem(LS_AUTHORED);
      localStorage.removeItem(LS_USER);

      state.userData = DEFAULT_USER_DATA;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(LOGIN_S, (state, action: any) => {
    //   // Data you want to store in redux after API success
    // });
    // builder.addCase(LOGIN_F, (state, action: any) => {
    //   // Data you want to remove or change after API fail
    // });
  },
});

export const { loaderChange, authFail, authSuccess } = loginSlice.actions;
export default loginSlice.reducer;
