import { combineReducers } from "redux";

import { voyageList } from "./voyageList";
import { apiConf } from "./apiConfig";

export default combineReducers({
  voyageList,
  apiConf,
});
