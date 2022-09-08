//To concate the path for the public folder
export const toAbsoluteUrl = (pathname) => process.env.PUBLIC_URL + pathname;

export const setupAxios = (axios, store) => {
  axios.interceptors.request.use(
    (req) => {
      const {
        auth: { userData },
      } = store.getState();

      if (userData && userData.token) {
        req.headers["Authorization"] = `Bearer ${userData.token}`;
        console.log("req.headers: ", req.headers);
      } else {
        delete req.headers.common["Authorization"];
      }

      return req;
    },
    (err) => Promise.reject(err)
  );

  axios.interceptors.response.use(null, (err) => {
    if (err.response) {
      if (err.response.status === 403) {
        store.dispatch({ type: "login/fail" });

        return Promise.reject(err);
      } else return Promise.reject(err);
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

export const encrypt = (param) => {
  if (param) return btoa(param);
  else return "";
};
export const decrypt = (param) => {
  if (param) return atob(param);
  else return "";
};
export const debounce = (func) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 500);
  };
};
export const validateVideoFileDuration = (file) => {
  var video = document.createElement("video");
  video.preload = "metadata";

  video.onloadedmetadata = function () {
    window.URL.revokeObjectURL(video.src);
    console.log("duration --- ", video.duration);

    if (video.duration < 1) {
      console.log("Invalid Video! video is less than 1 second");
      return;
    }
  };

  video.src = URL.createObjectURL(file);
};
