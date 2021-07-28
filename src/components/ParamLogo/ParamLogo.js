import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native'
import {
    Box, VStack, Stack, Center, Heading, IconButton, Icon, Button, NativeBaseProvider,
    FormControl,
    Input,
    Select,
    CheckIcon,
} from "native-base"

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function ParamLogoComponent({ navigation }) {
    const [logoServer, setlogoServer] = useState(null);
    const [image_logo, setImage_logo] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const logo_image = require('../../../assets/camera.png');
    const image = require('../../../assets/bgn.png');
    const logo_redi = require('../../../assets/logo_redi.png');
    const { height } = Dimensions.get('window');

    const options = {
        noData: false,
        includeBase64: true,
        mediaType: 'photo',
        title: 'Uploader une image',
        takePhotoButtonTitle: 'Depuis la caméra',
        chooseFromLibraryButtonTitle: 'Depuis la galerie',
        maxWidth: 500,
        maxHeight: 500, // à ne pas négliger
        storageOptions: {
            skipBackup: true,
            path: 'ItransportLogo',
        },
        // Choose Parcel from Envoy
    };

    const takeShooter = () => {
        launchImageLibrary(options, (response) => {
            // console.log(response.assets[0].uri, 'response assets uri');
            // console.log(response.uri, 'response uri');
            // console.log(response, 'response');
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const uri = response.assets[0].uri;
                const type = response.assets[0].type;
                const name = response.assets[0].fileName;
                const path = response.assets[0].path;
                const data = response.assets[0].base64;
                const source = {
                    uri,
                    type,
                    name,
                    path,
                    data,
                };
                const sourceCloud = {
                    uri,
                    type,
                    name,
                };
                // Test
                // this.simpleUpload(sourceCloud);

                setImage_logo(uri);
                setRefresh(!refresh);
            }
        });
    }

    useEffect(() => {
        // 
    }, []);

    return (
        <ImageBackground source={image} style={{ height: '100%' }}>
            <NativeBaseProvider>
                <ScrollView style={{ height }}>
                    <Stack space={5} mt={0} height={'100%'}>
                        {/* title */}
                        <ImageBackground source={logo_redi} style={styles.parent}>
                            <View style={styles.subParent}>
                                <View style={styles.left}>
                                    <IconButton onPress={() => { navigation.goBack() }} style={styles.iconleft} icon={<Icon size="xs" as={<AntDesign name="back" size={24} color="white" />} color="#fff" />} />
                                </View>
                                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '70%' }}>
                                    <Heading size="md" color='#fff' textAlign='center'> Configuration du Logo </Heading>
                                </View>
                            </View>
                        </ImageBackground>

                        {/* List Docs */}

                        <View
                            style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                        >
                            <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                                <View style={styles.round}>
                                    <View style={styles.v1}>
                                        {/* <Text>d</Text> */}
                                    </View>
                                    <View style={styles.v2}>
                                        <Text style={styles.txt_white}>
                                            Logo de l'application
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <MaterialIcons name="flip-camera-ios" size={22} color="black" />
                                    </View>
                                </View>
                            </Stack>
                        </View>

                        <View style={styles.viewContainer_second}>
                            {image_logo == null && (
                                <TouchableOpacity
                                    onPress={() => takeShooter()}
                                    activeOpacity={0.7}
                                    style={styles.legendeImages}
                                >
                                    <View style={styles.VVlegendeImages}>
                                        <Image source={logo_image} style={styles.icon_TextlegendeImages} />
                                    </View>
                                    <View>
                                        <Text style={styles.TextlegendeImages}>
                                            Ajouter un logo
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )}

                            
                            {image_logo != null && (
                                <TouchableOpacity
                                    onPress={() => takeShooter()}
                                    activeOpacity={0.7}
                                    style={styles.legendeImagess}>
                                    <Image source={{ uri: image_logo }} style={styles.image_phone} />
                                </TouchableOpacity>
                            )}


                        </View>
                            <Stack mx={4} mt={3} alignItems={'center'}>
                                <Button
                                    LeftIcon={<AntDesign name="addfolder" size={24} color="white" />}
                                    colorScheme="dark"
                                    bg={'#000000c0'}
                                    width={'95%'}
                                // onPress={}
                                // disabled={!isValid}
                                >
                                    Configurer
                                </Button>
                            </Stack>


                        <Box></Box>
                        <Box></Box>

                    </Stack>

                </ScrollView>
            </NativeBaseProvider>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        height: 80,
        resizeMode: 'contain',
    },
    subParent: {
        backgroundColor: "#000000c0",
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderColor: '#000000c0',
    },
    left: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        // marginTop: 20,
        // backgroundColor: 'red'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stack: {
        width: '88%',
        height: '100%'
        // justifyContent: 'space-around',
    },
    iconleft: {
        left: 15,
        backgroundColor: '#c3b27f',
        fontSize: 5,
    },
    image: {
        // height: '100%'
    },
    round: {
        width: '100%',
        height: 35,
        // backgroundColor: '#c3b27f',
        // backgroundColor: '#c3b27f',
        // alignItems:'center', 
        // borderColor: '#c3b27f',
        borderColor: 'gray',
        borderLeftColor: '#fff',
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        // borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    round2: {
        width: '100%',
        height: 50,
        // backgroundColor: '#c3b27f',
        // backgroundColor: '#c3b27f',
        // alignItems:'center', 
        // borderColor: '#c3b27f',
        borderColor: 'gray',
        borderLeftColor: '#fff',
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        // borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    txt_white: {
        fontSize: 14,
        color: '#336e7b',
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 5,
    },
    v1: {
        width: '2%',
        backgroundColor: '#c3b27f',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    v2: {
        width: '88%',
    },
    v3: {
        width: '10%',
        justifyContent: 'center',
    },
    label: {
        color: '#c3b27f'
    },
    date: {
        flexDirection: 'row',
        width: '100%'
    },
    date1: {
        width: '20%'
    },
    date2: {
        width: '60%',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    iconDate: {
        backgroundColor: '#c3b27f',
        fontSize: 5,
        width: '50%'
    },
    text_date: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#c3b27f',
    },
    legendeImages: {
        backgroundColor: 'transparent',
        height: 250,
        width: '96%',
        borderRadius: 20,
        borderColor: '#c3b27f',
        borderWidth: 1,
        justifyContent: 'center',
    },
    viewContainer_second: { 
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingRight: 20,
        paddingLeft: 20,
        marginTop: 15,
        // marginLeft: 20,
        // marginRight: 20,
        width: '100%',
    },
    icon_TextlegendeImages:{
        resizeMode: 'contain',
        height: 50,
        // width: 50,
    },
    VVlegendeImages: {
        height: 60,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextlegendeImages: {
        textAlign: 'center',
        fontSize: 12,
        color: '#c3b27f',
        fontWeight: 'bold',
    },
    legendeImagess: {
        backgroundColor: 'transparent',
        height: 250,
        width: '96%',
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'center',
    },
    image_phone: {
        height: 230,
        width: '94%',
        left: 10,
    },
});

