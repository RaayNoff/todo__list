import axios from "axios";
import { AnyAction, Dispatch } from "redux";
import {
  registrationAction,
  RegistrationActionTypes,
} from "../../types/registration";
import { BackendApiUrls } from "../../types/urls";
import { userDataField } from "../../types/user";

export const fetchRegistration = (
  login: userDataField,
  password: userDataField
) => {
  return async (dispatch: Dispatch<registrationAction | AnyAction>) => {
    try {
      dispatch({ type: RegistrationActionTypes.FETCH_REGISTRATION });
      const response = await axios.post(
        BackendApiUrls.LOCATION + BackendApiUrls.SIGNUP,
        {
          login: login,
          password: password,
        }
      );

      dispatch({ type: RegistrationActionTypes.FETCH_REGISTRATION_SUCCESS });
    } catch (e) {
      dispatch({
        type: RegistrationActionTypes.FETCH_REGISTRATION_ERROR,
        payload: "Неудалось зарегистрироваться",
      });
    }
  };
};

export type registationType = typeof fetchRegistration;
