import axios from "axios";

import { AppDispatch } from "..";
import { localStorageApi } from "../../api/localStorageApi";
import BackendApi from "../../types/classes/BackendApi";
import { ErrorMessages } from "../../types/enums/ErrorMessages";
import { AuthResponse } from "../../types/interfaces/Authorization";
import { $api } from "../http";
import AuthorizationSlice from "../reducers/authorizationSlice";

export const registration =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthorizationSlice.actions.registration());
      const response = await axios.post(
        BackendApi.LOCATION + BackendApi.REGISTRATION,
        {
          email: email,
          password: password,
        },
      );

      dispatch(
        AuthorizationSlice.actions.registrationSuccess(response.data.user),
      );
    } catch (error) {
      dispatch(
        AuthorizationSlice.actions.refreshError(ErrorMessages.REGISTRATION),
      );
    }
  };

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthorizationSlice.actions.login());
      const response = await $api.post<AuthResponse>(BackendApi.LOGIN, {
        email: email,
        password: password,
      });
      localStorageApi.setAccessToken(response.data.accessToken);

      dispatch(AuthorizationSlice.actions.loginSuccess(response.data.user));
    } catch (error) {
      dispatch(AuthorizationSlice.actions.loginError(ErrorMessages.LOGIN));
    }
  };

export const refresh = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(AuthorizationSlice.actions.refresh());
    const response = await axios.post<AuthResponse>(
      BackendApi.LOCATION + BackendApi.REFRESH,
      {
        accessToken: `${localStorage.getItem("token")}`,
      },
      {
        withCredentials: true,
      },
    );

    if (!response.data) throw new Error(ErrorMessages.REFRESH_NOT_VALID);

    localStorage.setItem("token", response.data.accessToken);

    dispatch(AuthorizationSlice.actions.refreshSuccess(response.data.user));
  } catch (error: Error | any) {
    if (error instanceof Error)
      dispatch(AuthorizationSlice.actions.refreshError(error.message));

    dispatch(
      AuthorizationSlice.actions.registrationError(ErrorMessages.REFRESH),
    );
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(AuthorizationSlice.actions.logout());

    await axios.post(BackendApi.LOCATION + BackendApi.LOGOUT);

    dispatch(AuthorizationSlice.actions.logoutSuccess());
  } catch (error) {
    dispatch(AuthorizationSlice.actions.logoutError(ErrorMessages.LOGOUT));
  }
};

export type AuthorizationType = typeof login | typeof registration;
