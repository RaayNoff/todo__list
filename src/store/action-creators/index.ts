import * as AuthorizationActionCreators from "./authorization";
import * as PopupsActionCreators from "./popups";
import * as HomeContentActionCreators from "./homeContent";

export default {
  ...AuthorizationActionCreators,
  ...PopupsActionCreators,
  ...HomeContentActionCreators,
};
