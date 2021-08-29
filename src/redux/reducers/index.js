import { combineReducers } from "redux";

import { voyageList } from "./voyageList";
import { apiConf } from "./apiConfig";
import { userConf } from "./userConf";

export default combineReducers({
  voyageList,
  apiConf,
  userConf,
  
});
