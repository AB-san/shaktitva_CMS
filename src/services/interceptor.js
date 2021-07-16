import axios from "axios";
import { BASE_URL } from "../constants/API";

const axiosInstance = axios.create({
  baseURL: BASE_URL + "/api"
});

const requestHandler = request => {
  // const token = localStorage.getItem("token");

  // if (token) {
  //   request.headers.Authorization = `Bearer ${token}`;
  // }
  //   request.headers["Content-Security-Policy"] =
  //     "default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'";
  //   request.headers["X-Content-Type-Options"] = "nosniff";
  //   request.headers["X-XSS-Protection"] = 1;
  //   request.headers["Strict-Transport-Security"] = "max-age=31536000";
  return request;
};

const errorHandler = async error => {
  console.log("Error---",error);
  if (error.response.status === 401) {
    window.location.href = "/401";
  }
  if (error.response.status === 403) {
    window.location.href = "/403";
  }
  if (error.response.status === 404) {
    window.location.href = "/404";
  }

  if (error.response.status >= 400) {
    await Promise.reject(error.response);
  }
};

const successHandler = response => {
  return response;
};

axiosInstance.interceptors.request.use(request => requestHandler(request));

axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);

export default axiosInstance;
