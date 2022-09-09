import { createSlice } from "@reduxjs/toolkit";
import { APP_NAME, LOGIN_F, LOGIN_S } from "../constants";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  userData: {},
};

export const loginAction = (data) => ({
  type: "API",
  payload: {
    // REAL
    // url: API_LOGIN,
    // DEMO
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "GET",
    data: data,
    hideLoader: false,
    success: (data) => ({
      type: LOGIN_S,
      payload: data,
    }),
    error: (data) => ({
      type: LOGIN_F,
      payload: [],
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
    builder.addCase(LOGIN_S, (state, action) => {
      // // Default header for auth
      // axios.defaults.headers.common['Authorization'] = action.payload.data.token;
      // localStorage.setItem(`authToken${APP_NAME}`, JSON.stringify(action.payload.data.token));
      // localStorage.setItem(`user${APP_NAME}`, JSON.stringify(action.payload.data));

      state.userData = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(LOGIN_F, (state, action) => {
      // // remove items on logout
      // delete axios.defaults.headers.common['Authorization']
      // localStorage.removeItem(`authToken${APP_NAME}`);
      // localStorage.removeItem(`user${APP_NAME}`);

      state.userData = {};
      state.isLoggedIn = false;
    });
  },
});

export const { loaderChange } = loginSlice.actions;
export default loginSlice.reducer;
