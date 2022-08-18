import {
  AuthorizationAction,
  AuthorizationActionTypes,
  IAuthorizationState,
} from "../../types/authorization";
import { IUser } from "../../types/user";

const initialState: IAuthorizationState = {
  loading: false,
  error: null,
  isAuthorized: false,
  user: {} as IUser,
};

export const authorizationReducer = (
  state = initialState,
  action: AuthorizationAction
): IAuthorizationState => {
  switch (action.type) {
    case AuthorizationActionTypes.FETCH_LOGIN:
      return {
        ...state,
        loading: true,
        error: null,
        isAuthorized: false,
        user: {} as IUser,
      };

    case AuthorizationActionTypes.FETCH_REGISTRATION:
      return {
        ...state,
        loading: true,
        error: null,
        isAuthorized: false,
        user: {} as IUser,
      };
    case AuthorizationActionTypes.FETCH_REFRESH:
      return {
        ...state,
        loading: true,
        error: null,
        isAuthorized: false,
        user: {} as IUser,
      };

    case AuthorizationActionTypes.FETCH_AUTHORIZATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isAuthorized: true,
        user: action.payload.user,
      };

    case AuthorizationActionTypes.FETCH_AUTHORIZATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthorized: false,
        user: {} as IUser,
      };

    case AuthorizationActionTypes.LOGOUT:
      return {
        ...state,
        loading: false,
        error: null,
        isAuthorized: false,
        user: {} as IUser,
      };

    default:
      return state;
  }
};
