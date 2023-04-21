import { LOGIN_F } from "constants/reducer";
import { LS_AUTHORED, LS_USER } from "../constants";
import { authFail, authSuccess } from "services/AuthSlice";

//To concate the path for the public folder
export const toAbsoluteUrl = (pathname) => window.location.origin + pathname;

// Fun used for setting up the common header for axios through out the app and rehydrate the redux store
export const setupAxios = (axios, store) => {

  if (localStorage.getItem(LS_AUTHORED) && localStorage.getItem(LS_USER)) {
    const token = JSON.parse(localStorage.getItem(LS_AUTHORED) || '');
    const userData = JSON.parse(localStorage.getItem(LS_USER) || '');

    // It's used to rehydrate redux auth data when page is refreshed
    if (token) {
      let USER_DATA = { ...userData, token: token };
      store.dispatch(authSuccess(USER_DATA));
    } else {
      store.dispatch(authFail({}));
    }
  }

  // It's used to intercept all the axios api response
  axios.interceptors.response.use(null, (err) => {
    if (err.response) {
      if (err.response.status === 403) {
        store.dispatch({ type: LOGIN_F });
        return Promise.reject(err);
      } else {
        return Promise.reject(err);
      }
    } else if (err.request) {
      return Promise.reject({
        response: {
          data: {
            message: "Something went wrong, Please try again later!!!",
          },
        },
      });
    }
  });
};

// Encrypt Function
export const encrypt = (param) => {
  if (param) return btoa(param);
  else return "";
};

// Decrypt Function
export const decrypt = (param) => {
  if (param) return atob(param);
  else return "";
};

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
): (...args: Params) => void {
  let timer: NodeJS.Timeout
  return (...args: Params) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout)
  }
}