import axios from 'axios';
import {updateUserConfig} from '../../redux/actions';

const url = '/Layers/Business/Controller/Bs_ApiMobileSiteController.php';

export const updateUser = async (dispatch, ACTION, USR_LOGIN, USR_PASS, USR_ID, featureLoad, apiConf, navigation, featureLoadErr) => {
    try {
        // console.log('Dans updateUser')
        const response = await axios.get(apiConf + url, {
            params: {
                ACTION,
                USR_LOGIN,
                USR_PASS,
                USR_ID
            }
        })
        
        const data = {
            USR_LOGIN,
            USR_PASS
        }
        // console.log(response.data, 'response updateUser');
        if(response.data[0].status == 1){
            dispatch(updateUserConfig(1,data));
            featureLoad()
            navigation.navigate('Dashboard', {
                reload: {
                    date: new Date()
                }
            })
        }
        if(response.data[0].status == 3){
            featureLoadErr()
        }
    } catch (error) {
        featureLoad()
        console.log(error, 'erreur interne updateUser');
    }
}

