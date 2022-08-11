import {
  IRegistrationState,
  registrationAction,
  RegistrationActionTypes,
} from "../../types/registration";

const initialState: IRegistrationState = {
  loading: false,
  error: null,
};

export const registrationReducer = (
  state = initialState,
  action: registrationAction
): IRegistrationState => {
  switch (action.type) {
    case RegistrationActionTypes.FETCH_REGISTRATION:
      return { loading: true, error: null };

    case RegistrationActionTypes.FETCH_REGISTRATION_SUCCESS:
      return { loading: false, error: null };

    case RegistrationActionTypes.FETCH_REGISTRATION_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
