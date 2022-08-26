import * as AuthorizationActionCreators from "./authorization";
import * as ListsActionCreators from "./list";
import * as PopupsActionCreators from "./popups";
import * as HomeContentActionCreators from "./homeContent";

export default {
  ...AuthorizationActionCreators,
  ...ListsActionCreators,
  ...PopupsActionCreators,
  ...HomeContentActionCreators,
};
