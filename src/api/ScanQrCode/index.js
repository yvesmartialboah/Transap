import axios from 'axios';

const url = '/Layers/Business/Controller/Bs_ApiMobileSiteController.php';

export const ScanQrCode = async (ACTION, USR_LOGIN, USR_PASS, USR_ID, TCK_NUM, setData, apiConf, setDataEvent, setLoader, setShowModal) => {
    try {
        // console.log('Dans ScanQrCode')
        // console.log(apiConf, 'apiConf + url')
        const response = await axios.get(apiConf + url, {
            params: {
                ACTION,
                USR_LOGIN,
                USR_PASS,
                USR_ID,
                TCK_NUM
            }
        })
        
        console.log(response, 'response');
        console.log(response.data, 'response ScanQrCode');
        if(response.data[0].status == 2){
            // Ticket scanné avec succès
            setLoader(false)
            setDataEvent(response.data[0].status)
            setData('Ticket Valide')
            setShowModal(true)
        }

        if(response.data[0].status == 3){
            // Ticket inexistant 
            setLoader(false)
            setDataEvent(response.data[0].status)
            setData('Ticket invalide')
            setShowModal(true)
        }

        if(response.data[0].status == 4){
            // Ticket déjà scanné 
            setLoader(false)
            setDataEvent(response.data[0].status)
            setData('Ticket déjà scanné')
            setShowModal(true)
        }

    } catch (error) {
        setLoader(false)
        setData("une erreur s'est produite !!!")
        console.log(error, 'erreur interne updateUser');
    }
}

