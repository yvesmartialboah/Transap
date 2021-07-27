import {ADD_RECIPES} from "../actionTypes";

const defaultState = [];

export const recipesList = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_RECIPES:
      // payload = [{}]
      return action.payload
    default:
      return state;
  }
};
