import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, ScrollView, Dimensions, Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { CameraScreen, Camera, CameraType } from 'react-native-camera-kit';
import { NativeBaseProvider, Box, Stack, Button, Modal, IconButton, Icon, Heading } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AwesomeLoading from 'react-native-awesome-loading';
const success = require('../../../assets/check-lg.png');
const success_or = require('../../../assets/check-lg-or.png');
const error = require('../../../assets/close-l.png');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from "react-redux";
import { getapiConf, getUserConf } from '../../redux/selectors';
import { ScanQrCode } from '../../api/ScanQrCode/index';


const { height } = Dimensions.get('window');

export default function ScanQrCodeComponent({ navigation, route }) {
    const [loader, setLoader] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(null);
    const [date, setDate] = useState(new Date());
    const [event, setDataEvent] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const hideSplash = () => {
        SplashScreen.hide();
    }
    const apiConf = useSelector(getapiConf);
    const userConf = useSelector(getUserConf);

    useEffect(() => {
        console.log(CameraScreen, 'CameraScreen')
        // setRefresh(!refresh)
        // hideSplash();
        // console.log(date, 'date')
        // console.log(route.params.reload.date, 'route.params.reload.date')
    }, [date, route.params.reload.date]);

    const verifQrCode = (event) => {
        console.log(event.nativeEvent.codeStringValue, 'value')
        setLoader(true)
        // Data User
        const ACTION = '_POINTAGETICKET_';
        const USR_LOGIN = userConf[0].usr_login;
        const USR_PASS = userConf[0].usr_pass;
        const USR_ID = userConf[0].usr_id;
        const TCK_NUM = event.nativeEvent.codeStringValue;
        // Data User
        ScanQrCode(ACTION, USR_LOGIN, USR_PASS, USR_ID, TCK_NUM, setData, apiConf[0].api, setDataEvent, setLoader, setShowModal, setDate)
    }

    // const ShowResult = (data) => {
    //     setData(data)
    //     setShowModal(true)
    // }


    return (

        <ScrollView style={{ height }}>
            <AwesomeLoading indicatorId={4} size={50} isActive={loader} text="loading" />
            <NativeBaseProvider>
                <View style={styles.parent}>
                    <View style={styles.left}>
                        <IconButton onPress={() => { navigation.goBack() }} style={styles.iconleft} icon={<Icon size="25" as={<AntDesign name="back" size={24} color="white" />} color="#fff" />} />
                    </View>
                    <View>
                        <Heading size="md" color='#35424a' top={2} textAlign='center'> Scanner le QrCode ici </Heading>
                    </View>
                </View>
                {/* <View style={styles.section}>
                    <Text style={styles.Titlesection}>Scanner le QrCode ici</Text>
                </View> */}

                {showModal == false && (
                    <View
                        style={styles.camera2}
                    >
                        <CameraScreen
                            style={styles.camera}
                            // Barcode props
                            scanBarcode={true}
                            onReadCode={(event) => {
                                verifQrCode(event)
                            }} // optional
                            showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
                            laserColor='green' // (default red) optional, color of laser in scanner frame
                            frameColor={'blue'} // (default white) optional, color of border of scanner frame
                        // captureButtonImage={success_or}
                        // hideControls={false}
                        // onBottomButtonPressed={(event) => verifQrCode(event)}
                        />
                    </View>
                )}



                {/* <Stack space={0} justifyContent={'center'} flexDirection={'row'} alignItems={'flex-start'} mt={0} height={'20%'}>
                    <Button
                        // flex={1}
                        // bgColor={'#c3b27f'}
                        bgColor={'transparent'}
                        onPress={(param) => {
                            // 
                        }}
                        startIcon={<AntDesign name="scan1" size={24} color="#fff" />}
                    >
                        Scanner
                    </Button>
                </Stack> */}
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Statut du ticket</Modal.Header>
                        <Modal.Body>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    {event == 2 || event == 4 ? (
                                        <Image source={success_or} style={styles.imgsuc} />
                                    ) : (
                                        <Image source={error} style={styles.imgsuc} />
                                    )}
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    {event == 2 || event == 4 ? (
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'orange', right: 20 }}>
                                            {data}
                                        </Text>
                                    ) : (
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'red' }}>
                                            {data}
                                        </Text>
                                    )}

                                </View>
                            </View>


                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group variant="ghost" space={2}>
                                {/* <Button>LEARN MORE</Button> */}
                                <Button
                                    onPress={() => {
                                        setShowModal(false)
                                    }}
                                >
                                    OK
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </NativeBaseProvider>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        alignItems: 'center',
        height: 50
    },
    section2: {
        margin: 10,
        padding: 10,
        alignItems: 'center'
    },
    bg: {
        // backgroundColor: 'red',
        color: 'black',
    },
    camera: {
        // height: 300,
        // alignItems: 'flex-start',
    },
    camera2: {
        height: 600,
        backgroundColor: 'red'
        // alignItems: 'flex-start',
    },
    Titlesection: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    Titlesection2: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'red',
    },
    imgsuc: {
        resizeMode: 'contain',
        height: 100
    },
    parent: {
        flexDirection: 'row',
        margin: 20,
    },
    left: {
        alignItems: 'flex-start',
        width: '20%',
        // backgroundColor: 'red'
    },
    iconleft: {
        left: 15,
        backgroundColor: '#c3b27f',
        fontSize: 5,
    },
});
