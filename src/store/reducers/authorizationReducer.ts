import {
  authorizationAction,
  AuthorizationActionTypes,
  IAuthorizationState,
} from "../../types/authorization";

const initialState: IAuthorizationState = {
  loading: false,
  error: null,
};

export const authorizationReducer = (
  state = initialState,
  action: authorizationAction
): IAuthorizationState => {
  switch (action.type) {
    case AuthorizationActionTypes.FETCH_AUTHORIZATION:
      return { loading: true, error: null };

    case AuthorizationActionTypes.FETCH_AUTHORIZATION__SUCCESS:
      return { loading: false, error: null };

    case AuthorizationActionTypes.FETCH_AUTHORIZATION_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
