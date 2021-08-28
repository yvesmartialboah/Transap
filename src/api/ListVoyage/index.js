import axios from 'axios';
import {fetchVoyageAction} from '../../redux/actions';

// const url = 'https://urban-mobility-management.com/Layers/Business/Controller/Bs_ApiMobileSiteController.php';
const url = '/Layers/Business/Controller/Bs_ApiMobileSiteController.php';
// ?ACTION=_OBTENIRVOYAGE_&USR_LOGIN=MOBILE&USR_PASS=1234&USR_ID=37

export const fetchVoyage = async (dispatch, ACTION, USR_LOGIN, USR_PASS, USR_ID, featureLoad, apiConf) => {
    try {
        console.log('Dans fetchVoyage')
        const response = await axios.get(apiConf + url, {
            params: {
                ACTION,
                USR_LOGIN,
                USR_PASS,
                USR_ID
            }
        })
        
        console.log(response.data, 'response fetchVoyage');
        dispatch(fetchVoyageAction(response.data));
        featureLoad()
    } catch (error) {
        featureLoad()
        dispatch(fetchVoyageAction([]));
        console.log(error, 'erreur interne fetchVoyage');
    }
}

