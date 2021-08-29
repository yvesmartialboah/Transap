import { API_USER, UPDATE_USER } from "../actionTypes";

const configIdUser = 37;
const configActionUser = '_AUTHENTIFICATION_';

const defaultState = [
    {
        id: 1,
        usr_id : configIdUser,
        usr_pass: null,
        usr_login: null,
        action: configActionUser
    }
];

export const userConf = (state = defaultState, action) => {
    // Une action à un type et un payload <=> action = {type: NOM_ACTION, payload}
    switch (action.type) {
        case API_USER:
            //   return [...state, action.payload];
            return action.payload;
        case UPDATE_USER:
            // map te retourne un nouveau state
            return state.map(param => {
                if (param.id === action.payload.id) {
                    console.log(action.payload, 'action.payload')
                    return { 
                        id: param.id,
                        usr_id: configIdUser,
                        usr_pass: action.payload.usr_pass,
                        usr_login: action.payload.usr_login,
                        action: configActionUser,
                    }
                } else {
                    return param;
                }
            })
        default:
            return state
    }
}
