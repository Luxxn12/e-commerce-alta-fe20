import axios from "axios";

const realAPI = axios.create({
  baseURL: "https://one.ybtech.online",
});

const openAPI = axios.create({
  baseURL:
    "https://virtserver.swaggerhub.com/FarahRaihanunnisa/E-CommerceManagementAPI/1.0.0",
});

let bearerToken = "";

export const setAxiosConfig = (token: string) => {
  bearerToken = token;

  if (bearerToken !== "") {
    realAPI.defaults.headers.Authorization = `Bearer ${bearerToken}`;
    openAPI.defaults.headers.Authorization = `Bearer ${bearerToken}`;
  } else {
    delete realAPI.defaults.headers.Authorization;
    delete openAPI.defaults.headers.Authorization;
  }
};

realAPI.interceptors.request.use((config) => {
  return config;
});

openAPI.interceptors.request.use((config) => {
  return config;
});

export { realAPI, openAPI };
