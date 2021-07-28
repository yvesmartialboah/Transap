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
const { height } = Dimensions.get('window');

const theme = extendTheme({
  components: {
      Input: {
          baseStyle: {
            borderColor:'#c3b27f',
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
const logo = require('../../../assets/logo_redi.png');

export default function LoginComponent({ navigation }) {

  const hideSplash = () => {
    SplashScreen.hide();
  }

  useEffect(() => {
    hideSplash();
  });


  // <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  return (
    <NativeBaseProvider theme={theme} style={{ height }}>
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
          <Animatable.View animation='zoomIn' iterationDelay={1000} iterationCount='infinite' direction="alternate" duration={3000}>
            <Image
              size={150}
              resizeMode={"contain"}
              borderRadius={100}
              source={logo}
              alt="Alternate Text"
            />
          </Animatable.View>
        </View>
        <View style={styles.lineSecond}>
          <Text style={styles.text}>I-TRANSPORT</Text>
        </View>
      </Box>

      
      <Box
        p={2}
        w="90%"
        mx='auto'
        // flex={1}
        // bg="#fff"
      >
        <Heading size="lg" color='#c3b27f' textAlign='center'>
          Connexion
        </Heading>
        <Text textAlign='center' style={styles.text2}>
          Heureux de vous revoir parmis nous.
        </Text>

        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label _text={{ color: '#c3b27f', fontSize: 'sm', fontWeight: 600 }}>
              Email
            </FormControl.Label>
            <Input 
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
            style={styles.input} placeholder='transport@contact.ci'/>
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label _text={{ color: '#c3b27f', fontSize: 'sm', fontWeight: 600 }}>
              Mot de passe
            </FormControl.Label>
            <Input style={styles.input} type="password" secureTextEntry={secureTextEntry} placeholder='Mot de passe' 
               InputRightElement={
                <Icon
                onPress={()=>{
                  setsecureTextEntry(!secureTextEntry)
                }}
                  as={<MaterialIcons name={secureTextEntry === true ? 'visibility' : 'info' } />}
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
            {/* <Link
              _text={{ fontSize: 'xs', fontWeight: '700', color: 'cyan.500' }}
              alignSelf="flex-end"
              mt={1}
            >
              Forget Password?
            </Link> */}
          </FormControl>
          <VStack space={2}>
            <Button onPress={()=>{navigation.navigate('Dashboard')}} 
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
            <Stack direction={'row'} space={5} mb={0} style={styles.stack}>
              <Center
                size={70}
                bg="#c3b27f"
                width={'47%'}
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
              <Center
                bg="#c3b27f"
                size={70}
                width={'47%'}
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
            </Stack>
            {/*  */}


          </Stack>
      {/* Première Ligne */}


          <HStack justifyContent="center">
            <View style={styles.bar}></View>
          </HStack>
        </VStack>
      </Box>
      
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
    bottom: 0,
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
    color: '#c3b27f',
    // borderColor: '#c3b27f',
    // borderWidth: 1,
  },
  btn: {
    backgroundColor: '#c3b27f',
  },
  bar: {
    // flex: 1,
    backgroundColor: '#c3b27f',
    top: 40,
    width: 80,
    borderRadius: 20,
    height: 4,
  },
  
});
