import { API_USER, UPDATE_USER } from "../actionTypes";

const configIdUser = 37;
const configActionUser = '_VERIFICATION_';

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
                // console.log(action, 'action')
                // console.log(param, 'param')

                if (param.id === action.payload.id) {
                    // console.log(action.payload, 'action.payload')
                    return { 
                        id: param.id,
                        usr_id: configIdUser,
                        usr_pass: action.payload.data.USR_PASS,
                        usr_login: action.payload.data.USR_LOGIN,
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
