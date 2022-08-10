import axios from "axios";
import { AnyAction, Dispatch } from "redux";
import {
  authorizationAction,
  AuthorizationActionTypes,
} from "../../types/authorization";
import { userDataField } from "../../types/user";

export const fetchAuthorization = (
  login: userDataField,
  password: userDataField
) => {
  return async (dispatch: Dispatch<authorizationAction | AnyAction>) => {
    try {
      dispatch({ type: AuthorizationActionTypes.FETCH_AUTHORIZATION });
      const response = await axios.post("http://localhost:8080/auth/signin", {
        login: login,
        password: password,
      });

      //Проверка на авторизацию

      dispatch({ type: AuthorizationActionTypes.FETCH_AUTHORIZATION__SUCCESS });
    } catch (e) {
      dispatch({
        type: AuthorizationActionTypes.FETCH_AUTHORIZATION_ERROR,
        payload: "Неудалось авторизироваться",
      });
    }
  };
};
