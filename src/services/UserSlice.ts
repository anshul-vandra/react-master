import { IUser } from '../Types/Entity/UserEntity';
import { createSlice } from "@reduxjs/toolkit";
import { API_LOGIN, USER_INFO_F, USER_INFO_S, USER_LIST_F, USER_LIST_S } from "../constants";

export interface IUserSlice {
  userList: IUser[];
  userInfo: IUser | {};
}

const initialState: IUserSlice = {
  userList: [],
  userInfo: {},
};

export const getUserList = (data) => ({
  type: "API",
  payload: {
    url: API_LOGIN,
    method: "POST",
    data: data,
    hideLoader: false,
    success: (data) => ({
      type: USER_LIST_S,
      payload: data,
    }),
    error: (data) => ({
      type: USER_LIST_F,
      payload: [],
    }),
  },
});

// Reducer
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(USER_LIST_S, (state, action: any) => {
      state.userList = action.payload.data;
    });
    builder.addCase(USER_LIST_F, (state) => {
      state.userList = [];
    });
    builder.addCase(USER_INFO_S, (state, action: any) => {
      state.userInfo = action.payload.data;
    });
    builder.addCase(USER_INFO_F, (state) => {
      state.userInfo = {};
    });
  },
});

export default userSlice.reducer;
