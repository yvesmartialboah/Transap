import React from "react"
import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Stack, Center, Heading, IconButton, Icon, Button, NativeBaseProvider } from "native-base"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function DashboardComponent({ navigation }) {
  const image = require('../../../assets/bgn.png');
  const { height } = Dimensions.get('window');
  return (
    <ScrollView style={{ height }}>
      <ImageBackground source={image} style={{ height }}>
        <NativeBaseProvider>
          <Stack space={5} mt={0} height={'80%'}>
            <View style={styles.parent}>
              <View style={styles.left}>
                <IconButton onPress={() => { navigation.toggleDrawer() }} style={styles.iconleft} icon={<Icon size="25" as={<MaterialIcons name='menu' />} color="#fff" />} />
              </View>
              <View>
                <Heading size="lg" color='#35424a' textAlign='center'> Tableau de board </Heading>
              </View>
            </View>

            {/* Première Ligne */}
            <Stack space={5} mt={5} justifyContent="space-between" alignItems="center">
              {/*  */}
              <Stack direction={'row'} space={5} mb={0} style={styles.stack}>
              <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ScanQrCode')
                  }}
                  activeOpacity={0.8}
                  style={styles.touch}
                >
                <Center
                  size={70}
                  bg="#c3b27f"
                  width={'100%'}
                  rounded={10}
                  _text={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}
                  shadow={3}
                  // mr={2}
                >
                  <AntDesign name="scan1" size={30} color="#fff" />
                  Scanner un ticket
                </Center>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ListVoyage')
                  }}
                  activeOpacity={0.8}
                  style={styles.touch}
                >
                <Center
                  bg="#c3b27f"
                  size={70}
                  width={'100%'}
                  rounded={10}
                  _text={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}
                  shadow={3}
                  // ml={2}
                >
                  <MaterialIcons name="attach-money" size={30} color="#fff" />
                  Payer un ticket
                </Center>
                </TouchableOpacity>
              </Stack>
              {/*  */}


            </Stack>
            {/* Première Ligne */}


            {/* Deuxième Ligne */}
            <Stack space={5} mt={0} alignItems="center">
              {/* TicketsVendu */}
              <Stack direction={'row'} space={5} style={styles.stack}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('TicketsVendu')
                  }}
                  activeOpacity={0.8}
                  style={styles.touch}
                >
                  <Center
                    size={70}
                    bg="#c3b27f"
                    width={'100%'}
                    rounded={10}
                    _text={{
                      color: "white",
                      fontSize: 12,
                      fontWeight: 'bold'
                    }}
                    shadow={3}
                    // mr={2}
                  >
                    <FontAwesome name="money" size={28} color="#fff" />
                    Tickets Vendu
                  </Center>
                </TouchableOpacity>

                {/* Tickets Scannés */}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('TicketsScanner')
                  }}
                  activeOpacity={0.8}
                  style={styles.touch}
                >
                  <Center
                    bg="#c3b27f"
                    size={70}
                    width={'100%'}
                    rounded={10}
                    _text={{
                      color: "white",
                      fontSize: 12,
                      fontWeight: 'bold'
                    }}
                    shadow={3}
                  // ml={2}
                  >
                    <MaterialIcons name="qr-code-scanner" size={28} color="#fff" />
                    Tickets Scannés
                  </Center>
                </TouchableOpacity>

              </Stack>
              {/*  */}


            </Stack>
            {/* Deuxième Ligne */}


          </Stack>


          {/* Btn */}

          <Stack space={0} justifyContent={'center'} flexDirection={'row'} alignItems={'flex-start'} mt={0} height={'20%'}>
            <Button
              // flex={1}
              bgColor={'#c3b27f'}
              onPress={() => { navigation.navigate('ScanQrCode') }}
              // onPress={() => setDirection(direction === "row" ? "column" : "row")}
              startIcon={<AntDesign name="scan1" size={24} color="#fff" />}
            >
              Scanner un ticket
            </Button>
          </Stack>
        </NativeBaseProvider>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    marginTop: 30,
  },
  left: {
    alignItems: 'flex-start',
    width: '20%',
    // backgroundColor: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stack: {
    width: '70%',
    justifyContent: 'space-around',
  },
  iconleft: {
    left: 15,
    backgroundColor: '#c3b27f',
    fontSize: 5,
  },
  image: {
    // height: '100%'
  },
  touch: {
    width: '48%',
    // backgroundColor: 'red',
  },
});
