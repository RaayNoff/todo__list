import axios from "axios";
import { AppDispatch } from "..";
import { localStorageApi } from "../../api/localStorageApi";
import BackendApi from "../../types/classes/BackendApi";
import { AuthResponse } from "../../types/interfaces/Authorization";
import { userDataField } from "../../types/userDataField";
import { $api } from "../http";
import { AuthorizationSlice } from "../reducers/authorizationSlice";

export const fetchLogin =
  (email: userDataField, password: userDataField) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthorizationSlice.actions.fetchAuthorization());

      const response = await $api.post<AuthResponse>(BackendApi.LOGIN, {
        email: email,
        password: password,
      });

      localStorageApi.setAccessToken(response.data.accessToken);

      dispatch(
        AuthorizationSlice.actions.fetchAuthorizationSuccess(response.data.user)
      );
    } catch (error) {
      dispatch(
        AuthorizationSlice.actions.fetchAuthorizationError(
          "Неудалось войти в приложение"
        )
      );
    }
  };

export const testCokie = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(BackendApi.TEST, {
      withCredentials: true,
    });
  } catch (error) {}
};

export const fetchRegistration =
  (email: userDataField, password: userDataField) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthorizationSlice.actions.fetchAuthorization());
      const response = await $api.post<AuthResponse>(BackendApi.REGISTRATION, {
        email: email,
        password: password,
      });

      localStorageApi.setAccessToken(response.data.accessToken);

      dispatch(
        AuthorizationSlice.actions.fetchAuthorizationSuccess(response.data.user)
      );
    } catch (error) {
      dispatch(
        AuthorizationSlice.actions.fetchAuthorizationError(
          "Неудалось зарегистрироваться"
        )
      );
    }
  };

export const checkAuth = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(AuthorizationSlice.actions.fetchAuthorizationRefresh());

    const response = await axios.post<AuthResponse>(BackendApi.REFRESH, {
      withCredentials: true,
    });

    localStorageApi.setAccessToken(response.data.accessToken);

    dispatch(
      AuthorizationSlice.actions.fetchAuthorizationSuccess(response.data.user)
    );
  } catch (error) {
    dispatch(AuthorizationSlice.actions.fetchAuthorizationRefreshError());
  }
};

export const logout = () => (dispath: AppDispatch) => {
  dispath(AuthorizationSlice.actions.authorizationLogout());
  localStorageApi.removeAccessToken();
};

export type AuthorizationType = typeof fetchLogin | typeof fetchRegistration;
