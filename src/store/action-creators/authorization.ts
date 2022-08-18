import axios, { AxiosError } from "axios";
import { AnyAction, Dispatch } from "redux";
import { $api } from "../../http";
import {
  AuthorizationAction,
  AuthorizationActionTypes,
  AuthResponse,
} from "../../types/authorization";
import BackendApi from "../../types/urls";
import { userDataField } from "../../types/user";

export const login = (email: userDataField, password: userDataField) => {
  return async (dispatch: Dispatch<AuthorizationAction | AnyAction>) => {
    try {
      dispatch({ type: AuthorizationActionTypes.FETCH_LOGIN });
      const response = await $api.post<AuthResponse>(BackendApi.LOGIN, {
        email: email,
        password: password,
      });

      localStorage.setItem("token", response.data.accessToken);

      dispatch({
        type: AuthorizationActionTypes.FETCH_AUTHORIZATION_SUCCESS,
        payload: response.data,
      });
    } catch (e: any | AxiosError) {
      dispatch({
        type: AuthorizationActionTypes.FETCH_AUTHORIZATION_ERROR,
        payload: e.message,
      });
    }
  };
};

export const registration = (email: userDataField, password: userDataField) => {
  return async (dispatch: Dispatch<AuthorizationAction | AnyAction>) => {
    try {
      dispatch({ type: AuthorizationActionTypes.FETCH_REGISTRATION });
      const response = await $api.post<AuthResponse>(BackendApi.REGISTRATION, {
        email: email,
        password: password,
      });

      localStorage.setItem("token", response.data.accessToken);

      dispatch({
        type: AuthorizationActionTypes.FETCH_AUTHORIZATION_SUCCESS,
        payload: response.data,
      });
    } catch (e: any | AxiosError) {
      dispatch({
        type: AuthorizationActionTypes.FETCH_AUTHORIZATION_ERROR,
        payload: e.message,
      });
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<AuthorizationAction | AnyAction>) => {
    try {
      dispatch({ type: AuthorizationActionTypes.LOGOUT });
      localStorage.removeItem("token");
    } catch (e: any) {
      console.error(e.message);
    }
  };
};

export const checkAuth = () => {
  return async (dispatch: Dispatch<AuthorizationAction | AnyAction>) => {
    try {
      dispatch({ type: AuthorizationActionTypes.FETCH_REFRESH });
      const response = await axios.get<AuthResponse>(BackendApi.REFRESH, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);

      dispatch({ type: AuthorizationActionTypes.FETCH_AUTHORIZATION_SUCCESS });
    } catch (e: any | AxiosError) {
      dispatch({
        type: AuthorizationActionTypes.FETCH_AUTHORIZATION_ERROR,
        payload: e.message,
      });
    }
  };
};

export type AuthorizationType = typeof registration | typeof login;
