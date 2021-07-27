import {ADD_RECIPES} from "./actionTypes";

// action = {type: NOM_TYPE, payload: data}
export const fetchRecipesAction = (data) => ({
    type: ADD_RECIPES,
    payload: data
})