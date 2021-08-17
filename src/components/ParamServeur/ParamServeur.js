import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import {
    Box, VStack, Stack, Center, Heading, IconButton, Icon, Button, NativeBaseProvider,
    FormControl,
    Input,
    Select,
    CheckIcon,
} from "native-base"
import { Formik } from 'formik';
import { infoParamYup } from './yup';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SInfo from 'react-native-sensitive-info';
import AwesomeLoading from 'react-native-awesome-loading';
import { useSelector, useDispatch } from "react-redux";
import {fetchApiConfig, updateApiConfig} from '../../redux/actions';
import {getapiConf} from '../../redux/selectors';

export default function ParamServeurComponent({ navigation }) {
    const image = require('../../../assets/bgn.png');
    const logo_redi = require('../../../assets/logo_redi.png');
    const { height } = Dimensions.get('window');
    const [link, setLink] = useState(apiConf);
    const [refresh, setRefresh] = useState(false);
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();
    const apiConf = useSelector(getapiConf);

    // Initialisation de l'addresse du server
    const InitialServerAdress = () => {
        SInfo.getItem('linkApi', {}).then(value => {
            if (value == null) {
                saveLinkInStorage('https://urban-mobility-management.com')
                dispatch(updateApiConfig(1,'https://urban-mobility-management.com'))
                // console.log(value, 'value server v')
            } else {
                // console.log(value, 'value server')
                // console.log(JSON.parse(value).linkServer, 'value server')
                saveLinkInStorage(JSON.parse(value).linkServer)
                dispatch(updateApiConfig(1,JSON.parse(value).linkServer))
            }
        })
    }
    
    
    useEffect(() => {
        InitialServerAdress() 
        // setLink(apiConf[0].api)
        console.log(apiConf, 'apiConf')
    }, []);
    
    
    
    

    const saveLinkInStorage = async (paramLink) => {
        // console.log( 'ns')

        // Configuration des données
        await SInfo.setItem('linkApi', JSON.stringify({
            linkServer: paramLink,
        }), {});

        
        dispatch(updateApiConfig(1, paramLink))
        setLink(paramLink)
        ToastAndroid.show("Adresse changer avec succès", ToastAndroid.SHORT)

    }

    return (
        <ImageBackground source={image}  style={{ height: '100%'}}>
            <AwesomeLoading indicatorId={4} size={50} isActive={loader} text="loading" />
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
                                    <Heading size="md" color='#fff' textAlign='center'> Configuration du Serveur </Heading>
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
                                            Addresse IP 
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <AntDesign name="infocirlce" size={22} color="black" />
                                    </View>
                                </View>
                            </Stack>
                        </View>
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
                                            ({link })
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <AntDesign name="infocirlce" size={22} color="black" />
                                    </View>
                                </View>
                            </Stack>
                        </View>

                        <Formik
                            validationSchema={infoParamYup}
                            initialValues={{
                                addresse_ip: ''
                            }}
                            onSubmit={values => {
                                saveLinkInStorage(values.addresse_ip)
                                // console.log(values)
                            }}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                setFieldValue,
                                values,
                                errors,
                                isValid,
                                touched,
                            }) => (

                                <View>
                                    {/* addresse_ip */}
                                    <FormControl isRequired isInvalid={(errors.addresse_ip && touched.addresse_ip)}>
                                        <Stack mx={4}>
                                            <FormControl.Label _invalid={{
                                                _text: {
                                                    color: "#9f1239",
                                                    fontWeight: "bold",
                                                },
                                            }}>
                                                Addresse IP
                                            </FormControl.Label>
                                            <Input
                                                p={2}
                                                placeholder="Addresse Ip"
                                                onChangeText={handleChange('addresse_ip')}
                                                onBlur={handleBlur('addresse_ip')}
                                                value={values.addresse_ip}
                                            />
                                            {(errors.addresse_ip && touched.addresse_ip) &&
                                                <FormControl.ErrorMessage>
                                                    {errors.addresse_ip}
                                                </FormControl.ErrorMessage>
                                            }
                                            {/* <FormControl.HelperText>
                                            We'll keep this between us.
                                        </FormControl.HelperText> */}
                                        </Stack>
                                    </FormControl>
                                    {/* addresse_ip */}
                                    
                                    <Stack mx={4} mt={3}>
                                        <Button
                                            LeftIcon={<AntDesign name="addfolder" size={24} color="white" />}
                                            colorScheme="dark"
                                            bg={'#000000c0'}
                                            onPress={handleSubmit}
                                            disabled={!isValid}
                                        >
                                            ENREGISTRER
                                        </Button>
                                    </Stack>

                                </View>
                            )}

                        </Formik>



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
    }
});

