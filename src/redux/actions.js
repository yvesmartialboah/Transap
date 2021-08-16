import {LIST_VOYAGE, API_CONFIG, UPDATE_API} from "./actionTypes";

// action = {type: NOM_TYPE, payload: data}
export const fetchVoyageAction = (data) => ({
    type: LIST_VOYAGE,
    payload: data
})

// action = {type: NOM_TYPE, payload: data}
export const fetchApiConfig = (data) => ({
    type: API_CONFIG,
    payload: data
})

// Mettre à jour le statut
export const updateApiConfig = (id,api) => ({
    type: UPDATE_API,
    payload: {
        id,
        api
    }
})