import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, StatusBar, ScrollView, Dimensions } from 'react-native';
import {
  NativeBaseProvider,
  extendTheme,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
  Image,
  Stack,
  Center,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import SplashScreen from 'react-native-splash-screen';
import { LoginYup } from './yup';
import { Formik } from 'formik';
import { useSelector, useDispatch } from "react-redux";
import { getUserConf, getapiConf } from '../../redux/selectors';
import { updateUser } from '../../api/LoginApp/index';
import Toast from 'react-native-toast-message';
import AwesomeLoading from 'react-native-awesome-loading';
import DoubleClick from 'react-native-double-tap';

const { height } = Dimensions.get('window');
const themeColor = '#2D4F6B';

const logo = require('../../../assets/logo_redi.png');

export default function LoginComponent({ navigation }) {

  const theme = extendTheme({
    components: {
      Input: {
        baseStyle: {
          borderColor: themeColor,
          _hover: {
            borderColor: '#fff'
          }
        },
        defaultProps: {},
        variants: {},
        sizes: {},
      }
    }
  });

  const [loader, setLoader] = useState(false);
  const [config, setConfig] = useState(false);
  const dispatch = useDispatch();
  const userConf = useSelector(getUserConf);
  const apiConf = useSelector(getapiConf);

  const hideSplash = () => {
    SplashScreen.hide();
  }

  useEffect(() => {
    // console.log(userConf, 'userConf')
    hideSplash();
  });

  const featureLoad = () => {
    // console.log('test')
    setLoader(false)
  }

  const featureLoadErr = () => {
    // console.log('test')
    setLoader(false)
    Toast.show({
      type: 'error',
      text1: 'Login ou mot de passe incorrect !!!',
      text2: 'Veuillez rééssayer svp !!!',
      position: 'top',
      visibilityTime: 4000,
      autoHide: true,
    })
  }

  const LoginApp = (param) => {
    // Data User
    const ACTION = userConf[0].action;
    const USR_LOGIN = param.email;
    const USR_PASS = param.password;
    const USR_ID = userConf[0].id;
    setLoader(true)
    // Data User
    updateUser(dispatch, ACTION, USR_LOGIN, USR_PASS, USR_ID, featureLoad, apiConf[0].api, navigation, featureLoadErr)
    // navigation.navigate('Dashboard')
  }



  // <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  return (
    <NativeBaseProvider theme={theme} style={{ height }}>
      <AwesomeLoading indicatorId={4} size={50} isActive={loader} text="Chargement" />
      <ScrollView style={{ height, backgroundColor: '#fff' }}>
        <Box
          flex={1}
          p={2}
          w="100%"
          mx='auto'
          bg="#fff"
        >

          <Box
            // flex={1}
            p={2}
            w="100%"
            mx='auto'
            alignItem='center'
            justifyContent="center"
          >
            <View style={styles.line}>
              <Animatable.View animation='fadeInLeft' iterationDelay={1000} iterationCount={1} direction="alternate" duration={3000}>
              <DoubleClick
                singleTap={() => {
                }}
                doubleTap={() => {
                  setConfig(!config)
                }}
                delay={200}
              >
                <Image
                  size={150}
                  resizeMode={"contain"}
                  borderRadius={100}
                  source={logo}
                  alt="Alternate Text"
                />
              </DoubleClick>
              </Animatable.View>
            </View>
            <View style={styles.lineSecond}>
              <Text style={styles.text}>Transap</Text>
            </View>
          </Box>


          <Formik
            validationSchema={LoginYup}
            initialValues={{
              email: '', //-
              password: ''
            }}
            onSubmit={(values, actions) => {
              // console.log(values, 'values')
              actions.resetForm()
              LoginApp(values)
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
              <Box
                p={2}
                w="90%"
                mx='auto'
              // flex={1}
              // bg="#fff"
              >
                <Heading size="lg" color={themeColor} textAlign='center'>
                  Connexion
                </Heading>
                <Text textAlign='center' style={styles.text2}>
                  Heureux de vous revoir parmis nous.
                </Text>

                <VStack space={2} mt={5}>
                  <FormControl isRequired isInvalid={(errors.email && touched.email)}>
                    <FormControl.Label _text={{ color: { themeColor }, fontSize: 'sm', fontWeight: 600 }}>
                      Pseudo
                    </FormControl.Label>
                    <Input
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      InputRightElement={
                        <Icon
                          as={<MaterialIcons name={'message'} />}
                          size="md"
                          m={2}
                          _hover={{
                            color: "#c3b27f",
                          }}
                          _light={{
                            color: "#abb5be",
                            // color: "#c3b27f",
                          }}
                          _dark={{
                            color: "gray.300",
                          }}
                        />
                      }
                      style={styles.input}
                      placeholder='transap@contact.ci' />
                    <View style={styles.alert}>
                      {(errors.email && touched.email) &&
                        <FormControl.ErrorMessage>
                          {errors.email}
                        </FormControl.ErrorMessage>
                      }
                    </View>
                  </FormControl>


                  <FormControl mb={5} isRequired isInvalid={(errors.password && touched.password)}>
                    <FormControl.Label _text={{ color: { themeColor }, fontSize: 'sm', fontWeight: 600 }}>
                      Mot de passe
                    </FormControl.Label>
                    <Input
                      style={styles.input}
                      type="password"
                      secureTextEntry={secureTextEntry}
                      placeholder='Mot de passe'
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      InputRightElement={
                        <Icon
                          onPress={() => {
                            setsecureTextEntry(!secureTextEntry)
                          }}
                          as={<MaterialIcons name={secureTextEntry === true ? 'visibility' : 'info'} />}
                          size="md"
                          m={2}
                          _hover={{
                            color: "#c3b27f",
                          }}
                          _light={{
                            // color: "#c3b27f",
                            color: "#abb5be",
                          }}
                          _dark={{
                            color: "gray.300",
                          }}
                        />
                      }
                    />
                    <View style={styles.alert}>
                      {(errors.password && touched.password) &&
                        <FormControl.ErrorMessage>
                          {errors.password}
                        </FormControl.ErrorMessage>
                      }
                    </View>

                    {/* <Link
              _text={{ fontSize: 'xs', fontWeight: '700', color: 'cyan.500' }}
              alignSelf="flex-end"
              mt={1}
            >
              Forget Password?
            </Link> */}
                  </FormControl>
                  <VStack space={2}>
                    <Button
                      onPress={handleSubmit}
                      disabled={!isValid}
                      // onPress={() => {
                      //   navigation.navigate('Dashboard')
                      // }}
                      style={styles.btn}
                      _text={{ color: 'white', fontWeight: 'bold' }}
                      startIcon={<AntDesign name="login" size={24} color="#fff" />}
                    >
                      Continue
                    </Button>


                  </VStack>
                  {/* Première Ligne */}
                  <Stack space={5} mt={5} justifyContent="space-between" alignItems="center">
                    {/*  */}
                    {config == true && (
                      <Stack direction={'row'} space={5} mb={0} style={styles.stack}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('ParamServeur')
                          }}
                          activeOpacity={0.8}
                          style={styles.touch}
                        >
                          <Center
                            size={70}
                            bg={themeColor}
                            width={'100%'}
                            rounded={10}
                            _text={{
                              color: "white",
                              fontSize: 12,
                              fontWeight: 'bold'
                            }}
                            shadow={3}
                          // mr={5}
                          >
                            <MaterialCommunityIcons name="api" size={30} color="#fff" />
                            Lien du serveur
                          </Center>
                        </TouchableOpacity>

                        {/* <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ParamLogo')
                    }}
                    activeOpacity={0.8}
                    style={styles.touch}
                  >
                  <Center
                    bg={themeColor}
                    size={70}
                    width={'100%'}
                    rounded={10}
                    _text={{
                      color: "white",
                      fontSize: 12,
                      fontWeight: 'bold'
                    }}
                    shadow={3}
                  // ml={5}
                  >
                    <MaterialIcons name="flip-camera-ios" size={30} color="#fff" />
                    Changer le logo
                  </Center>
                  </TouchableOpacity> */}
                      </Stack>
                    )}
                    {/*  */}


                  </Stack>
                  {/* Première Ligne */}


                  <HStack justifyContent="center">
                    <View style={styles.bar}></View>
                  </HStack>
                </VStack>
              </Box>

            )}

          </Formik>

        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineSecond: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  text: {
    color: '#abb5be',
    fontWeight: 'bold',
    fontSize: 14,
  },
  text2: {
    color: '#abb5be',
    fontWeight: 'bold',
    fontSize: 13,
  },
  title: {
    color: '#c3b27f',
  },
  input: {
    color: themeColor,
    // borderColor: '#c3b27f',
    // borderWidth: 1,
  },
  btn: {
    backgroundColor: themeColor,
  },
  bar: {
    // flex: 1,
    backgroundColor: '#c3b27f',
    top: 40,
    width: 80,
    borderRadius: 20,
    height: 4,
  },
  touch: {
    width: '47%',
    // backgroundColor: 'red',
  },
});
