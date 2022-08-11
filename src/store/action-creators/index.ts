import * as AuthorizationActionCreators from "./authorization";
import * as RegistrationActionCreators from "./registration";

export default {
  ...AuthorizationActionCreators,
  ...RegistrationActionCreators,
};
