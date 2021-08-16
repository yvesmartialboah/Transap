import { API_CONFIG, UPDATE_API } from "../actionTypes";

const defaultState = [
    {
        id: 1,
        api: 'https://urban-mobility-management.com'
    }
];

export const apiConf = (state = defaultState, action) => {
    // Une action à un type et un payload <=> action = {type: NOM_ACTION, payload}
    switch (action.type) {
        case API_CONFIG:
            //   return [...state, action.payload];
            return action.payload;
        case UPDATE_API:
            // map te retourne un nouveau state
            return state.map(apiData => {
                if (apiData.id === action.payload.id) {
                    // console.log(action.payload.api, 'action.payload.api')
                    return { id: apiData.id, api: action.payload.api }
                } else {
                    return apiData;
                }
            })
        default:
            return state
    }
}
