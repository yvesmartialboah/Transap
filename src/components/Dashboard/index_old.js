import React, { useEffect } from "react"
import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Stack, Center, Heading, IconButton, Icon, Button, NativeBaseProvider } from "native-base"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getUserConf } from '../../redux/selectors';
import { useSelector, useDispatch } from "react-redux";

const themeColor = '#2D4F6B';
export default function DashboardComponent({ navigation, route }) {
  const image = require('../../../assets/bgn.png');
  const { height } = Dimensions.get('window');
  const userConf = useSelector(getUserConf);
  

  useEffect(() => {
    console.log(userConf, 'userConf')
  }, [route.params.reload.date])

  return (
    <ScrollView style={{ height }}>
      <ImageBackground source={image} style={{ height }}>
        <NativeBaseProvider>
          <Stack space={5} mt={0} height={'80%'}>
            <View style={styles.parent}>
              <View style={styles.left}>
                <IconButton onPress={() => { navigation.toggleDrawer() }} style={styles.iconleft} icon={<Icon size="25" as={<MaterialIcons name='menu' />} color="#fff" />} />
              </View>
              <View style={{width: '60%'}}>
                <Heading size="lg" color='#35424a' textAlign='center'> Tableau de bord </Heading>
              </View>
            </View>

            {/* Première Ligne */}
            <Stack space={5} mt={5} justifyContent="space-between" alignItems="center">
              {/*  */}
              <Stack direction={'row'} space={5} mb={0} style={styles.stack}>
                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate('', {
                    //   reload: {
                    //     date: new Date()
                    //   }
                    // })
                  }}
                  activeOpacity={0.8}
                  style={styles.touch}
                >
                  <Center
                    size={70}
                    bg={themeColor}
                    // bg="#c3b27f"
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
                    {/* <AntDesign name="scan1" size={30} color="#fff" /> */}
                    <Text style={styles.cpt}
                      >
                      52000 FCFA
                      </Text>
                    Gains/Voyage
                  </Center>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ListVoyage', {
                      getvoy: {
                        reload: true,
                        time: new Date()
                      }
                    })
                  }}
                  activeOpacity={0.8}
                  style={styles.touch}
                >
                  <Center
                    bg={themeColor}
                    // bg="#c3b27f"
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
            {/* TicketsVendu */}
            <Stack space={5} mt={0} alignItems="center">
              <Stack direction={'row'} space={5} style={styles.stack}>
                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate('')
                  }}
                  activeOpacity={0.8}
                  style={styles.touch}
                >
                  <Center
                    size={70}
                    bg={themeColor}
                    // bg="#c3b27f"
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
                    {/* <FontAwesome name="money" size={28} color="#fff" />
                     */}
                      <Text style={styles.cpt}
                      >
                      25
                      </Text>
                    Tickets Vendu
                  </Center>
                </TouchableOpacity>

                {/* Tickets Scannés */}
                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate('')
                  }}
                  activeOpacity={0.8}
                  style={styles.touch}
                >
                  <Center
                    bg={themeColor}
                    // bg="#c3b27f"
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
                    {/* <MaterialIcons name="qr-code-scanner" size={28} color="#fff" /> */}
                     <Text style={styles.cpt}
                      >
                        23
                      </Text>
                    Tickets Pointés
                  </Center>
                </TouchableOpacity> 

              </Stack>
              {/*  */}


            </Stack>
            {/* Deuxième Ligne */}

            {/* Troisième Ligne */}
            {/* Tickets Non Vendu */}
            <Stack space={5} mt={0} alignItems="center">
              <Stack direction={'row'} space={5} style={styles.stack}>
                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate('')
                  }}
                  activeOpacity={0.8}
                  style={styles.touch}
                >
                  <Center
                    size={70}
                    bg={themeColor}
                    // bg="#c3b27f"
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
                    {/* <FontAwesome name="money" size={28} color="#fff" />
                     */}
                      <Text style={styles.cpt}
                      >
                      20
                      </Text>
                    Tickets Non Vendu
                  </Center>
                </TouchableOpacity>

                {/* Tickets Scannés */}
                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate('')
                  }}
                  activeOpacity={0.8}
                  style={styles.touch}
                >
                  {/* <Center
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
                  >
                     <Text style={styles.cpt}
                      >
                        23
                      </Text>
                    Tickets Pointés
                  </Center> */}
                </TouchableOpacity> 

              </Stack>
              {/*  */}


            </Stack>
            {/* Troisième Ligne */}


          </Stack>


          {/* Btn */}

          <Stack space={0} justifyContent={'center'} flexDirection={'row'} alignItems={'flex-start'} mt={0} height={'20%'}>
            <Button
              // flex={1}
              bgColor={themeColor}
              
              onPress={() => {
                navigation.navigate('ScanQrCode', {
                  reload: {
                    date: new Date()
                  }
                })
              }}
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
    backgroundColor: themeColor,
    fontSize: 5,
  },
  image: {
    // height: '100%'
  },
  touch: {
    width: '48%',
    // backgroundColor: 'red',
  },
  cpt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14
  }
});
