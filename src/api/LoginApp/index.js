import axios from 'axios';
import {updateUserConfig} from '../../redux/actions';

const url = '/Layers/Business/Controller/Bs_ApiMobileSiteController.php';

export const updateUser = async (dispatch, ACTION, USR_LOGIN, USR_PASS, USR_ID, featureLoad, apiConf) => {
    try {
        console.log('Dans updateUser')
        const response = await axios.get(apiConf + url, {
            params: {
                ACTION,
                USR_LOGIN,
                USR_PASS,
                USR_ID
            }
        })
        
        console.log(response.data, 'response updateUser');
        dispatch(updateUserConfig(response.data));
        featureLoad()
    } catch (error) {
        featureLoad()
        console.log(error, 'erreur interne updateUser');
    }
}

