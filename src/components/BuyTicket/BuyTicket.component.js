import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import {
    Box, VStack, Stack, Center, Heading, IconButton, Icon, Button, NativeBaseProvider,
    FormControl,
    Input,
    Select,
    CheckIcon,
} from "native-base"
import { Formik } from 'formik';
import { BuyTicketYup } from './yup';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import axios from 'axios';
import 'moment/locale/en-au';


const AchatTicket = () => {
    axios.post('https://urban-mobility-management.com/Layers/Business/Controller/Bs_ApiMobileSiteController.php?ACTION=_PAIEMENT_&GH_ID=14&USR_ID=25&OPR_MONTANT=8000&TCK_PRIX=8000&TCK_NUM=20210728680&USR_LOGIN=MOBILE&USR_PASS=1234&USR_ID=37', {
        params: {
          ID: 12345
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
}

const BuyTicketComponent = ({ navigation, route }) => {
    const [assurance, setAssurance] = useState(null); // For select
    const image = require('../../../assets/bgn.png');
    const logo_redi = require('../../../assets/logo_redi.png');
    const { height } = Dimensions.get('window');

    useEffect(()=>{
        // console.log(route.params.voyage.voyage_id, 'route.params.voyage.voyage_id')
    })

    return (
        <ImageBackground source={image}  style={{ height: '100%'}}>
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
                                    <Heading size="md" color='#fff' textAlign='center'> {route.params.voyage.voyage_id} </Heading>
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
                                            Achat de ticket du voyage : {route.params.voyage.voyage_id}
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <AntDesign name="checkcircleo" size={22} color="black" />
                                    </View>
                                </View>
                            </Stack>
                        </View>

                        <Formik
                            validationSchema={BuyTicketYup}
                            initialValues={{
                                num_ticket: null,
                            }}
                            onSubmit={values => console.log(values)}
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
                                    {/* Numero */}
                                    <FormControl isRequired isInvalid={(errors.num_ticket && touched.num_ticket)}>
                                        <Stack mx={4}>
                                            <FormControl.Label _invalid={{
                                                _text: {
                                                    color: "#9f1239",
                                                    fontWeight: "bold",
                                                },
                                            }}>
                                                Nombre de ticket
                                            </FormControl.Label>
                                            <Input
                                                p={2}
                                                placeholder="Nombre de ticket"
                                                onChangeText={handleChange('num_ticket')}
                                                onBlur={handleBlur('num_ticket')}
                                                value={values.num_ticket}
                                                keyboardType="numeric"
                                            />
                                            {(errors.num_ticket && touched.num_ticket) &&
                                                <FormControl.ErrorMessage>
                                                    {errors.num_ticket}
                                                </FormControl.ErrorMessage>
                                            }
                                            {/* <FormControl.HelperText>
                                            We'll keep this between us.
                                        </FormControl.HelperText> */}
                                        </Stack>
                                    </FormControl>

                                        {/* Prix du ticket */}
                                    <FormControl>
                                        <Stack mx={4}>
                                            <FormControl.Label _invalid={{
                                                _text: {
                                                    color: "#9f1239",
                                                    fontWeight: "bold",
                                                },
                                            }} style={styles.label}>Prix du ticket</FormControl.Label>
                                            <Input
                                                p={2}
                                                placeholder=""
                                                value={'8000'}
                                                isDisabled={true}
                                            />
                                        </Stack>
                                    </FormControl>

                                    <Stack mx={4} mt={3}>
                                        <Button
                                            LeftIcon={<AntDesign name="addfolder" size={24} color="white" />}
                                            colorScheme="dark"
                                            bg={'#000000c0'}
                                            onPress={handleSubmit}
                                            disabled={!isValid}
                                        >
                                            Acheter
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
};

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

export default BuyTicketComponent;
