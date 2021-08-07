import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, ScrollView, Dimensions, Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { CameraScreen } from 'react-native-camera-kit';
import { NativeBaseProvider, Box, Stack, Button, Modal } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AwesomeLoading from 'react-native-awesome-loading';
const success = require('../../../assets/check-lg.png');
const success_or = require('../../../assets/check-lg-or.png');
const error = require('../../../assets/close-l.png');

const { height } = Dimensions.get('window');

export default function ScanQrCodeComponent({ navigation }) {
    const [loader, setLoader] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(null);
    const [event, setDataEvent] = useState(null);
    const hideSplash = () => {
        SplashScreen.hide();
    }

    useEffect(() => {
        hideSplash();
    }, []);

    async function capturePhoto() {
        await this.camera.capture();
    }

    const verifQrCode = (event) => {
        // console.log(event.nativeEvent.codeStringValue, 'value')
        setDataEvent(event.nativeEvent.codeStringValue)
        if (event.nativeEvent.codeStringValue == 'http://fr.wikipedia.org/') {
            ShowResult('Ticket Valide')
        } else {
            ShowResult('Ticket Non Valide')
        }
    }

    const ShowResult = (data) => {
        setData(data)
        setShowModal(true)
    }


    return (

        <ScrollView style={{ height }}>
            <AwesomeLoading indicatorId={4} size={50} isActive={loader} text="loading" />
            <NativeBaseProvider>
                <View style={styles.section}>
                    <Text style={styles.Titlesection}>Scanner le QrCode ici</Text>
                </View>

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
                        frameColor='white' // (default white) optional, color of border of scanner frame
                    />
                </View>


                <Stack space={0} justifyContent={'center'} flexDirection={'row'} alignItems={'flex-start'} mt={0} height={'20%'}>
                    <Button
                        // flex={1}
                        // bgColor={'#c3b27f'}
                        bgColor={'transparent'}
                        // onPress={() => {
                        //   capturePhoto()
                        // }}
                        startIcon={<AntDesign name="scan1" size={24} color="#fff" />}
                    >
                        Scanner
                    </Button>
                </Stack>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Statut du ticket</Modal.Header>
                        <Modal.Body>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    {event == 'http://fr.wikipedia.org/' ? (
                                        <Image source={success_or} style={styles.imgsuc} />
                                    ) : (
                                        <Image source={error} style={styles.imgsuc} />
                                    )}
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    {event == 'http://fr.wikipedia.org/' ? (
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
        height: 400,
        // alignItems: 'flex-start',
    },
    camera2: {
        height: 500,
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
    }
});
