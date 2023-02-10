// ENV CONSTANTS
export const { REACT_APP_API_BASE: API_BASE } = process.env;
export const { REACT_APP_NAME: APP_NAME } = process.env;

// LOCALSTORAGE KEYNOTE
export const LS_USER: string = `user${APP_NAME}`
export const LS_AUTHORED: string = `authToken${APP_NAME}`

// TYPES FOR REDUCER
export const LOGIN_S: string = `LOGIN_S`;
export const LOGIN_F: string = `LOGIN_F`;

export const USER_LIST_S: string = `USER_LIST_S`;
export const USER_LIST_F: string = `USER_LIST_F`;

export const USER_INFO_S: string = `USER_INFO_S`;
export const USER_INFO_F: string = `USER_INFO_F`;

// API ENDPOINTS
export const API_LOGIN: string = `admin/login`;

export const API_USER_LIST: string = `admin/userList`;
export const API_USER_INFO: string = `admin/userInfo`;