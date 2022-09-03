import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/dist/query";
import axios from "axios";
import { localStorageApi } from "../../api/localStorageApi";
import { useActions } from "../../hooks/useActions";
import BackendApi from "../../types/classes/BackendApi";
import { ErrorMessages } from "../../types/enums/ErrorMessages";
import { AuthResponse } from "../../types/interfaces/Authorization";
import AuthorizationSlice from "../reducers/authorizationSlice";

export const $api = axios.create({
  withCredentials: true,
  baseURL: BackendApi.LOCATION,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
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
        const { refresh } = useActions();
        refresh();
        return $api.request(originalRequest);
      } catch (e: any) {
        console.error(e.message);
      }
    }
    throw Error("Произошла ошибка при попытке обновить данные");
  }
);

const baseQuery = fetchBaseQuery({
  baseUrl: BackendApi.LOCATION,
  prepareHeaders: (headers) => {
    headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
    return headers;
  },
  credentials: "include",
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    api.dispatch(AuthorizationSlice.actions.refresh());

    try {
      const refreshResult = await axios.post<AuthResponse>(
        BackendApi.LOCATION + BackendApi.REFRESH,
        {
          accessToken: `${localStorage.getItem("token")}`,
        },
        {
          withCredentials: true,
        }
      );

      localStorageApi.setAccessToken(refreshResult.data.accessToken);

      api.dispatch(
        AuthorizationSlice.actions.refreshSuccess(refreshResult.data.user)
      );

      result = await baseQuery(args, api, extraOptions);
    } catch (error) {
      api.dispatch(
        AuthorizationSlice.actions.refreshError(ErrorMessages.REFRESH)
      );
    }
  }
  return result;
};
