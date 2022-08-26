import axios from "axios";
import { useActions } from "../../hooks/useActions";
import BackendApi from "../../types/classes/BackendApi";
import { AuthResponse } from "../../types/interfaces/Authorization";

export const $api = axios.create({
  withCredentials: true,
  baseURL: BackendApi.LOCATION,
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
        const { checkAuth } = useActions();
        checkAuth();
        return $api.request(originalRequest);
      } catch (e: any) {
        console.error(e.message);
      }
    }
    throw Error("Произошла ошибка при попытке обновить данные");
  }
);
