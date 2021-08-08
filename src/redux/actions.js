import {LIST_VOYAGE} from "./actionTypes";

// action = {type: NOM_TYPE, payload: data}
export const fetchVoyageAction = (data) => ({
    type: LIST_VOYAGE,
    payload: data
})