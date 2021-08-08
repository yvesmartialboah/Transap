import {LIST_VOYAGE} from "../actionTypes";

const defaultState = [];

export const voyageList = (state = defaultState, action) => {
  switch (action.type) {
    case LIST_VOYAGE:
      // payload = [{}]
      return action.payload
    default:
      return state;
  }
};
