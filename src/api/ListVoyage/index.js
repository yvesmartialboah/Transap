import axios from 'axios';
import {fetchVoyageAction} from '../../redux/actions';

const url = 'https://urban-mobility-management.com/Layers/Business/Controller/Bs_ApiMobileSiteController.php';
// ?ACTION=_OBTENIRVOYAGE_&USR_LOGIN=MOBILE&USR_PASS=1234&USR_ID=37

export const fetchVoyage = async (dispatch, ACTION, USR_LOGIN, USR_PASS, USR_ID) => {
    try {
        // console.log('Dans fetchVoyage')
        const response = await axios.get(url, {
            params: {
                ACTION,
                USR_LOGIN,
                USR_PASS,
                USR_ID
            }
        })
        
        // console.log(response.data, 'response fetchVoyage');
        dispatch(fetchVoyageAction(response.data));
    } catch (error) {
        console.log(error, 'erreur interne fetchVoyage');
    }
}

