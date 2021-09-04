import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon
} from 'native-base';

const image = require('../../../../assets/bgn.png');
export default function SidebarComponent({ props, navigation }) {
  const { height } = Dimensions.get('window');
  return (
    <ImageBackground source={image} style={{ height }}>
      <NativeBaseProvider>
        <DrawerContentScrollView {...props} safeArea>
          <VStack space={6} my={2} mx={1}>
            <Box px={4}>
              <TouchableOpacity onPress={() => {
                navigation.toggleDrawer()
              }} style={styles.close}>
                <AntDesign name="closecircleo" size={24} color="#d64541" />
              </TouchableOpacity>
              <Text bold color="gray.700">Ali</Text>
              <Text fontSize={14} mt={1} color="gray.500" fontWeight={500}>ali@gmail.com</Text>
            </Box>
            <VStack divider={<Divider />} space={4}>
              {/* <VStack space={3}>
              {props.state.routeNames.map((name, index) => (
                <Pressable
                  px={5}
                  py={3}
                  rounded="md"
                  bg={index === props.state.index ? 'rgba(6, 182, 212, 0.1)' : 'transparent'}
                  onPress={(event) => {
                    props.navigation.navigate(name);
                  }}
                >
                  <HStack space={7} alignItems="center">
                    <Icon
                      color={index === props.state.index ? 'primary.500' : 'gray.500'}
                      size={5} as={<MaterialCommunityIcons name={getIcon(name)} />} />
                    <Text fontWeight={500} color={index === props.state.index ? 'primary.500' : 'gray.700'}>
                      {name}
                    </Text>
                  </HStack>
                </Pressable>
              ))}
            </VStack> */}
              <VStack space={5}>
                <Text fontWeight={500} fontSize={14} px={5} color="gray.500">Menu</Text>
                <VStack space={3}>
                  <Pressable
                    px={5}
                    py={3}
                  >
                    <HStack space={7} alignItems="center">
                      <Icon
                        color='gray.500'
                        size={5} as={<MaterialCommunityIcons name="home-export-outline" size={24} color="black" />} />
                      <Text color='gray.700' fontWeight={500}>
                        Dashboard
                      </Text>
                    </HStack>
                  </Pressable>
                  <Pressable
                    px={5}
                    py={2}
                    onPress={() => {
                      navigation.navigate('ScanQrCode')
                    }}
                  >
                    <HStack space={7} alignItems="center">
                      <Icon
                        color='gray.500'
                        size={5} as={<AntDesign name="scan1" size={24} color="#fff" />} />
                      <Text color='gray.700' fontWeight={500}>
                        Scanner un ticket
                      </Text>
                    </HStack>
                  </Pressable>

                  <Pressable
                    px={5}
                    py={2}
                    onPress={() => {
                      navigation.navigate('ListVoyage', {
                        getvoy: {
                          time: new Date()
                        }
                      })
                    }}
                  >
                    <HStack space={7} alignItems="center">
                      <Icon
                        color='gray.500'
                        size={5} as={<MaterialIcons name="attach-money" size={24} color="#fff" />} />
                      <Text color='gray.700' fontWeight={500}>
                      Payer un ticket
                      </Text>
                    </HStack>
                  </Pressable>
                  
                  <Pressable
                    px={5}
                    py={3}
                  >
                    <HStack space={7} alignItems="center">
                      <Icon
                        color='gray.500'
                        size={5} as={<AntDesign name="logout" size={24} color="#fff" />} />
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Login')
                        }}
                      >
                        <Text fontWeight={500} color='gray.700'>
                          Déconnexion
                        </Text>
                      </TouchableOpacity>
                    </HStack>
                  </Pressable>
                </VStack>
              </VStack>
            </VStack>
          </VStack>
        </DrawerContentScrollView>
      </NativeBaseProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    // backgroundColor: 'red'
  },
});
