import * as AuthorizationActionCreators from "./authorization";
import * as RegistrationActionCreators from "./registration";
import * as ListsActionCreators from "./lists";

export default {
  ...AuthorizationActionCreators,
  ...RegistrationActionCreators,
  ...ListsActionCreators,
};
