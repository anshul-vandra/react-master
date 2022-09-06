import { createSlice } from "@reduxjs/toolkit";
// import { API_LOGIN } from "../constants";

// const projectName = 'XYZ'

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
      type: "login/success",
      payload: data,
    }),
    error: (data) => ({
      type: "login/fail",
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
    builder.addCase("login/success", (state, action) => {
      // // Default header for auth
      // axios.defaults.headers.common['Authorization'] = action.payload.data.token;
      // localStorage.setItem(`authToken${projectName}`, JSON.stringify(action.payload.data.token));
      // localStorage.setItem(`user${projectName}`, JSON.stringify(action.payload.data));

      state.userData = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase("login/fail", (state, action) => {
      // // remove items on logout
      // delete axios.defaults.headers.common['Authorization']
      // localStorage.removeItem(`authToken${projectName}`);
      // localStorage.removeItem(`user${projectName}`);

      state.userData = {};
      state.isLoggedIn = false;
    });
  },
});

export const { loaderChange } = loginSlice.actions;
export default loginSlice.reducer;
