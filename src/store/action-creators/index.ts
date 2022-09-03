import * as AuthorizationActionCreators from "./authorization";
import * as PopupsActionCreators from "./popups";
import * as HomeContentActionCreators from "./homeContent";
import * as SidebarActionCreators from "./sidebar";

export default {
  ...AuthorizationActionCreators,
  ...PopupsActionCreators,
  ...HomeContentActionCreators,
  ...SidebarActionCreators,
};
