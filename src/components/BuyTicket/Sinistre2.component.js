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
import { infoSinistreYup } from './yup';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import 'moment/locale/en-au';
import SplashScreen from 'react-native-splash-screen';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function SinistreComponent({ navigation }) {
    const [assurance, setAssurance] = useState(null); // For select
    const image = require('../../../assets/bgn.png');
    const logo_redi = require('../../../assets/logo_redi.png');
    const { height } = Dimensions.get('window');

    // Date
    const [date, setDate] = useState(new Date());
    const [dateSend, setDateSend] = useState(moment().format('Y-M-D',new Date()));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        // setShow(Platform.OS === 'ios');
        // console.log(moment().format('Y-M-D',currentDate), "moment().format('D-M-Y',currentDate)")
        setDate(currentDate);
        setDateSend(moment().format('Y-M-D',currentDate));
        setShow(false);

    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    // Date

    const hideSplash = () => {
        SplashScreen.hide();
      }
    
    useEffect(() => {
        hideSplash();
        // console.log('dateSend', dateSend)
    }, []);

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
                                    <Heading size="md" color='#fff' textAlign='center'> DM-0065/20 </Heading>
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
                                            Information sur sinistre
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <AntDesign name="checkcircleo" size={22} color="black" />
                                    </View>
                                </View>
                            </Stack>
                        </View>

                        <Formik
                            validationSchema={infoSinistreYup}
                            initialValues={{
                                num_sinistre: '',
                                nom_proprietaire: '',
                                prenom_proprietaire: '',
                                numero_police: '',
                                affaire: '',
                                assurance: '',
                                date_assurance: '',
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
                                    <FormControl isRequired isInvalid={(errors.num_sinistre && touched.num_sinistre)}>
                                        <Stack mx={4}>
                                            <FormControl.Label _invalid={{
                                                _text: {
                                                    color: "#9f1239",
                                                    fontWeight: "bold",
                                                },
                                            }}>
                                                Numero du sinistre
                                            </FormControl.Label>
                                            <Input
                                                p={2}
                                                placeholder="Numero du sinistre"
                                                onChangeText={handleChange('num_sinistre')}
                                                onBlur={handleBlur('num_sinistre')}
                                                value={values.num_sinistre}
                                            />
                                            {(errors.num_sinistre && touched.num_sinistre) &&
                                                <FormControl.ErrorMessage>
                                                    {errors.num_sinistre}
                                                </FormControl.ErrorMessage>
                                            }
                                            {/* <FormControl.HelperText>
                                            We'll keep this between us.
                                        </FormControl.HelperText> */}
                                        </Stack>
                                    </FormControl>

                                        {/* Nom du propri??taire */}
                                    <FormControl isRequired isInvalid={(errors.nom_proprietaire && touched.nom_proprietaire)}>
                                        <Stack mx={4}>
                                            <FormControl.Label _invalid={{
                                                _text: {
                                                    color: "#9f1239",
                                                    fontWeight: "bold",
                                                },
                                            }} style={styles.label}>Nom du propri??taire</FormControl.Label>
                                            <Input
                                                p={2}
                                                placeholder="Nom du propri??taire"
                                                onChangeText={handleChange('nom_proprietaire')}
                                                onBlur={handleBlur('nom_proprietaire')}
                                                value={values.nom_proprietaire}
                                            />
                                            {(errors.nom_proprietaire && touched.nom_proprietaire) &&
                                                <FormControl.ErrorMessage>
                                                    {errors.nom_proprietaire}
                                                </FormControl.ErrorMessage>
                                            }
                                        </Stack>
                                    </FormControl>

                                    {/* prenom */}
                                    <FormControl isRequired isInvalid={(errors.prenom_proprietaire && touched.prenom_proprietaire)}>
                                        <Stack mx={4}>
                                            <FormControl.Label _invalid={{
                                                _text: {
                                                    color: "#9f1239",
                                                    fontWeight: "bold",
                                                },
                                            }} style={styles.label}>Pr??nom du propri??taire</FormControl.Label>
                                            <Input
                                                p={2}
                                                placeholder="Pr??nom du propri??taire"
                                                onChangeText={handleChange('prenom_proprietaire')}
                                                onBlur={handleBlur('prenom_proprietaire')}
                                                value={values.prenom_proprietaire}
                                            />
                                            {(errors.prenom_proprietaire && touched.prenom_proprietaire) &&
                                                <FormControl.ErrorMessage>
                                                    {errors.prenom_proprietaire}
                                                </FormControl.ErrorMessage>
                                            }
                                        </Stack>
                                    </FormControl>

                                    {/* Date */}
                                    <FormControl isRequired isInvalid={(errors.date_assurance && touched.date_assurance)}>
                                        <Stack mx={4}>
                                            <FormControl.Label _invalid={{
                                                _text: {
                                                    color: "#9f1239",
                                                    fontWeight: "bold",
                                                },
                                            }} style={styles.label}>Date Assurance</FormControl.Label>
                                            <View style={styles.date}>
                                                <View style={styles.date1}>
                                                    <IconButton onPress={() => { showDatepicker() }}
                                                        style={styles.iconDate}
                                                        icon={<Icon size="xs" as={<MaterialIcons name="date-range" size={34} color="#fff" />}
                                                            color="#fff" />}
                                                    />
                                                </View>
                                                <View style={styles.date2}>
                                                {show ? (
                                                    <DateTimePicker
                                                        testID="dateTimePicker"
                                                        value={date}
                                                        mode={mode}
                                                        is24Hour={true}
                                                        display="default"
                                                        onChange={() => {
                                                            onChange()
                                                            handleChange('date_assurance')
                                                            setFieldValue('date_assurance')
                                                        }}
                                                    />
                                                ): 
                                                    <Text style={styles.text_date}> {moment().format('D-M-Y',date)} </Text>
                                                    // <Text>{date.toString().substr(4, 12)}</Text>
                                                }
                                                </View>
                                            </View>
                                            {(errors.date_assurance && touched.date_assurance) &&
                                                <FormControl.ErrorMessage>
                                                    {errors.date_assurance}
                                                </FormControl.ErrorMessage>
                                            }
                                        </Stack>
                                    </FormControl>

                                    {/* Assurance */}
                                    <FormControl isRequired isInvalid={(errors.assurance && touched.assurance)}>
                                        <Stack mx={4}>
                                            <FormControl.Label _invalid={{
                                                _text: {
                                                    color: "#9f1239",
                                                    fontWeight: "bold",
                                                },
                                            }} style={styles.label}>Assurance</FormControl.Label>
                                            <Select
                                                selectedValue={values.assurance}
                                                minWidth={200}
                                                // accessibilityLabel="--- Selectionnez une assurance ---"
                                                placeholder="- Selectionnez une assurance -"
                                                onValueChange={(itemValue) => {
                                                    setAssurance(itemValue)
                                                    setFieldValue('assurance', itemValue)
                                                }}
                                                _selectedItem={{
                                                    bg: "cyan.600",
                                                    endIcon: <CheckIcon size={4} />,
                                                }}
                                            >
                                                <Select.Item label="JavaScript" value={'1'} />
                                                <Select.Item label="TypeScript" value="ts" />
                                                <Select.Item label="C" value="c" />
                                                <Select.Item label="Python" value="py" />
                                                <Select.Item label="Java" value="java" />
                                            </Select>
                                            {(errors.assurance && touched.assurance) &&
                                                <FormControl.ErrorMessage>
                                                    {errors.assurance}
                                                </FormControl.ErrorMessage>
                                            }
                                        </Stack>
                                    </FormControl>

                                    {/* numero_police */}
                                    <FormControl isRequired isInvalid={(errors.numero_police && touched.numero_police)}>
                                        <Stack mx={4}>
                                            <FormControl.Label _invalid={{
                                                _text: {
                                                    color: "#9f1239",
                                                    fontWeight: "bold",
                                                },
                                            }} style={styles.label}>Num??ro de police</FormControl.Label>
                                            <Input
                                                p={2}
                                                placeholder="Num??ro de police"
                                                onChangeText={handleChange('numero_police')}
                                                onBlur={handleBlur('numero_police')}
                                                value={values.numero_police}
                                                keyboardType="numeric"
                                            />
                                            {(errors.numero_police && touched.numero_police) &&
                                                <FormControl.ErrorMessage>
                                                    {errors.numero_police}
                                                </FormControl.ErrorMessage>
                                            }
                                        </Stack>
                                    </FormControl>

                                    {/* Affaire */}
                                    <FormControl isRequired isInvalid={(errors.affaire && touched.affaire)}>
                                        <Stack mx={4}>
                                            <FormControl.Label _invalid={{
                                                _text: {
                                                    color: "#9f1239",
                                                    fontWeight: "bold",
                                                },
                                            }} style={styles.label}>Affaire</FormControl.Label>
                                            <Input
                                                p={2}
                                                placeholder="Affaire"
                                                onChangeText={handleChange('affaire')}
                                                onBlur={handleBlur('affaire')}
                                                value={values.affaire}
                                            />
                                            {(errors.affaire && touched.affaire) &&
                                                <FormControl.ErrorMessage>
                                                    {errors.affaire}
                                                </FormControl.ErrorMessage>
                                            }
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
                                            Continue
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

