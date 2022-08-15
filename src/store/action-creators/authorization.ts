import axios from "axios";
import { AnyAction, Dispatch } from "redux";
import {
  authorizationAction,
  AuthorizationActionTypes,
} from "../../types/authorization";
import { BackendApiUrls } from "../../types/urls";
import { userDataField } from "../../types/user";

export const fetchAuthorization = (
  email: userDataField,
  password: userDataField
) => {
  return async (dispatch: Dispatch<authorizationAction | AnyAction>) => {
    try {
      dispatch({ type: AuthorizationActionTypes.FETCH_AUTHORIZATION });
      const response = await axios.post(
        BackendApiUrls.LOCATION + BackendApiUrls.SIGNIN,
        {
          email: email,
          password: password,
        }
      );

      dispatch({ type: AuthorizationActionTypes.FETCH_AUTHORIZATION_SUCCESS });
    } catch (e) {
      dispatch({
        type: AuthorizationActionTypes.FETCH_AUTHORIZATION_ERROR,
        payload: "Неудалось авторизироваться",
      });
    }
  };
};

export type authorizationType = typeof fetchAuthorization;
