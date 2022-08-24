import * as AuthorizationActionCreators from "./authorization";
import * as ListsActionCreators from "./list";

export default {
  ...AuthorizationActionCreators,
  ...ListsActionCreators,
};
