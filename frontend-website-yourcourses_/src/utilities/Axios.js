import axios from "axios";

const publicaxios = axios.create();
publicaxios.defaults.headers.common["cache-control"] = "no-cache";
publicaxios.defaults.headers.post["Content-Type"] = "no-cache";
publicaxios.defaults.headers.put["Content-Type"] = "no-cache";

const privateaxios = axios.create();
privateaxios.defaults.headers.common["cache-control"] = "no-cache";
privateaxios.defaults.headers.post["Content-Type"] = "no-cache";
privateaxios.defaults.headers.put["Content-Type"] = "no-cache";

export const setJWT = (jwt) => {
  privateaxios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
};

export const setUnAuthInterceptor = (logoutHandler) => {
  privateaxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error);
      if (error.response) {
        switch (error.response.status) {
          case 401:
            logoutHandler();
            break;
          default:
            console.log(error);
        }
      } else {
        console.log(error);
      }
      return Promise.reject(error);
    }
  );
};

export const naxios = publicaxios;
export const paxios = privateaxios;
