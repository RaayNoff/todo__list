import {
  authorizationAction,
  AuthorizationActionTypes,
  IAuthorizationState,
} from "../../types/authorization";

const initialState: IAuthorizationState = {
  loading: false,
  error: null,
  isAuthorized: false,
};

export const authorizationReducer = (
  state = initialState,
  action: authorizationAction
): IAuthorizationState => {
  switch (action.type) {
    case AuthorizationActionTypes.FETCH_AUTHORIZATION:
      return { loading: true, error: null, isAuthorized: false };

    case AuthorizationActionTypes.FETCH_AUTHORIZATION_SUCCESS:
      return { loading: false, error: null, isAuthorized: true };

    case AuthorizationActionTypes.FETCH_AUTHORIZATION_ERROR:
      return {
        loading: false,
        error: action.payload,
        isAuthorized: false,
      };

    default:
      return state;
  }
};
