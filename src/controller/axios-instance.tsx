import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

API.interceptors.request.use(
  (config) => {
    config.headers["x-rapidapi-key"] = import.meta.env.VITE_RAPID_API_KEY;
    config.headers["x-rapidapi-host"] = "booking-com15.p.rapidapi.com";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
