import { doLogout } from "../actions/auth";

//To concate the path for the public folder
export const toAbsoluteUrl = pathname => (process.env.PUBLIC_URL + pathname)

export const setupAxios = (axios, store) => {
    axios.interceptors.request.use(req => {
        const { auth: { user } } = store.getState();

        if (user && user.token) {
            req.headers["Authorization"] = `Bearer ${user.token}`;
        }

        return req;
    }, err => Promise.reject(err));

    axios.interceptors.response.use(null, (err) => {
        if (err.response) {
            if (err.response.status === 403) {
                store.dispatch(doLogout())

                return Promise.reject(err);
            } else return Promise.reject(err);
        } else if (err.request) {
            return Promise.reject({
                response: {
                    data: {
                        message: "Something went wrong, Please try again later!!!"
                    }
                }
            });
        }
    });
}
