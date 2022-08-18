import * as AuthorizationActionCreators from "./authorization";
import * as ListsActionCreators from "./lists";

export default {
  ...AuthorizationActionCreators,
  ...ListsActionCreators,
};
