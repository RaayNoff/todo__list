import axios from "axios";
import { AuthResponse } from "../types/authorization";
import BackendApi from "../types/urls";

export const $api = axios.create({
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  if (!config.headers) return;

  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest.isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(
          `${BackendApi.REFRESH}`,
          { withCredentials: true }
        );
        localStorage.setItem("token", response.data.accessToken);
        return $api.request(originalRequest);
      } catch (e: any) {}
    }
    throw Error("Error occured trying fetch refresh");
  }
);
