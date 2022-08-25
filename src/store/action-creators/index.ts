import * as AuthorizationActionCreators from "./authorization";
import * as ListsActionCreators from "./list";
import * as PopupsActionCreators from "./popups";

export default {
  ...AuthorizationActionCreators,
  ...ListsActionCreators,
  ...PopupsActionCreators,
};
