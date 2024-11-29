
import axios from 'axios';
import NProgress from 'nprogress';
import { getToken } from '../utils/tokenActions';


// Initial language from localStorage or default to 'en'
const lang = localStorage.getItem("i18nextLng") || 'en';
const baseUrl = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json',
    'accept-language': lang,
    'Lang': lang,
  },
});

api.interceptors.request.use(
  (config) => {
    NProgress.start();
    try {
      const token = getToken("accessToken");
      const lang = localStorage.getItem("i18nextLng");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      if (lang) {
        config.headers["Accept-Language"] = lang;
        config.headers["Lang"] = lang;
      }

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    NProgress.done();
    return Promise.reject({
      message: "Error in request interceptor",
      error,
    });
  }
);


api.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response
  },
  (error) => {
    NProgress.done();
    if (error.response?.status === 401) {
      
      // store.dispatch(removeUser());
      // removeAllTokens()
    }
    return Promise.reject(error);
  }
);



