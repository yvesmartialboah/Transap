import axios from 'axios';

// const url = 'https://urban-mobility-management.com/Layers/Business/Controller/Bs_ApiMobileSiteController.php';
const url = '/Layers/Business/Controller/Bs_ApiMobileSiteController.php';

export const fetchListTicket = async (ACTION, USR_LOGIN, USR_PASS, USR_ID, featureLoad, apiConf, V_ID, setListTicket, setListTicketCount) => {
    try {
        console.log('Dans fetchListTicket')
        const response = await axios.get(apiConf + url, {
            params: {
                ACTION,
                USR_LOGIN,
                USR_PASS,
                USR_ID,
                V_ID
            }
        })
        
        console.log(response.data, 'response fetchVoyage');
        setListTicket(response.data)
        setListTicketCount(response.data.length)
        featureLoad()
    } catch (error) {
        featureLoad()
        setListTicketCount(0)
        console.log(error, 'erreur interne fetchVoyage');
    }
}

