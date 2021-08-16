import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { Box, VStack, Stack, Center, Heading, IconButton, Icon, Button, NativeBaseProvider, Input } from "native-base"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch } from "react-redux";
import { getvoyage, getapiConf } from '../../redux/selectors';
import {fetchVoyage} from '../../api/ListVoyage/index';
import AwesomeLoading from 'react-native-awesome-loading';


export default function ListVoyageComponent({ navigation }) {
  const voyage = useSelector(getvoyage);
  const apiConf = useSelector(getapiConf);
  const dispatch = useDispatch();

  const [searchType, setSearchType] = useState('');
  const [loader, setLoader] = useState(true);
  const image = require('../../../assets/bgn.png');
  const { height } = Dimensions.get('window');
  const DATA = [
    // {
    //   V_ID: "1",
    //   V_DATEDEPART: "2021-05-20",
    //   V_DATEARRIVEE: "0000-00-00",
    //   V_HEUREDEP: "07:30:00",
    //   V_HEUREARV: "05:30:00",
    //   V_VILLEDEPART: "ABIDJAN",
    //   V_VILLEARRIVE: "KORHOGO",
    //   V_VILLEESCALE1: "YAMOUSSOUKRO",
    //   V_VILLEESCALE2: "BOUAKE",
    //   V_VILLEESCALE3: "KATIOLA",
    //   V_VILLEESCALE4: null,
    //   V_VILLEESCALE5: null,
    //   V_DISTANCE: "600",
    //   C_ID: "1",
    //   P_ID: "6",
    //   C_IM: "IM0000001CI",
    //   P_NOMP: "JEAN KOUASSI"
    // },
    // {
    //   V_ID: "2",
    //   V_DATEDEPART: "2021-05-20",
    //   V_DATEARRIVEE: "0000-00-00",
    //   V_HEUREDEP: "07:30:00",
    //   V_HEUREARV: "05:30:00",
    //   V_VILLEDEPART: "ABIDJAN",
    //   V_VILLEARRIVE: "KORHOGO",
    //   V_VILLEESCALE1: "YAMOUSSOUKRO",
    //   V_VILLEESCALE2: "BOUAKE",
    //   V_VILLEESCALE3: "KATIOLA",
    //   V_VILLEESCALE4: null,
    //   V_VILLEESCALE5: null,
    //   V_DISTANCE: "600",
    //   C_ID: "1",
    //   P_ID: "6",
    //   C_IM: "2IM0000001CI",
    //   P_NOMP: "JEAN KOUASSI"
    // },

  ];

  const featureLoad = () => {
    console.log('test')
    setLoader(false)
  }

  // Data User
  const ACTION = '_OBTENIRVOYAGE_';
  const USR_LOGIN = 'MOBILE';
  const USR_PASS = 1234;
  const USR_ID = 37;
  // Data User

  useEffect(() => {
    // console.log(link, 'link')
    fetchVoyage(dispatch,ACTION,USR_LOGIN,USR_PASS,USR_ID, featureLoad, link[0].api)
    // setTimeout( ()=> {
    //   setLoader(false)
    // },3000)
  }, []);

  const [listDATA, setlistDATA] = useState(voyage);
  const [link, setLink] = useState(apiConf);
  const [checkData, setcheckData] = useState(true);

  const onTypeChange = (val) => {

    let text = val.toLowerCase();
    let contentData = listDATA;
    let filteredName = contentData.filter((item) => {
      return item.P_NOMP.toLowerCase().match(text) || item.C_IM.toLowerCase().match(text)
    })

    if (!text || text === ''|| text.length == 1) {
      setcheckData(true)
      setlistDATA(voyage)
    }
    else if (filteredName.length == 0) {
      // set no data flag to true so as to render flatlist conditionally
      // console.log(filteredName, 'filteredName')
      setcheckData(false)

    }
    else if (Array.isArray(filteredName)) {
      // console.log(DATA[filteredName.name].sort(), 'sort()')
      setcheckData(true)
      setlistDATA(filteredName)
    }

  }

  const _renderItem = ({ item }) => {
    return (
      <ScrollView>
        <Stack space={5} mt={5} justifyContent="center" alignItems="center">
          <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BuyTicket', {
                  voyage : {
                    voyage_id : item.C_IM
                  }
                })
              }}
              style={styles.round}>
              <Text style={styles.txt_white}>
                {item.C_IM}
              </Text>
              <Text style={styles.txt_white_sub}>
                Chauffeur : {item.P_NOMP}
              </Text>
              <Text style={styles.txt_white_sub2}>
                De {item.V_VILLEDEPART} à {item.V_VILLEARRIVE} - {item.V_DISTANCE} K.m
              </Text>
              <Text style={styles.txt_white_sub2}>
                Heure de départ : {item.V_HEUREDEP} - Heure d'arrivée : {item.V_HEUREARV}
              </Text>
              <Text style={styles.txt_white_sub2}>
                Escale : {item.V_VILLEESCALE1} - {item.V_VILLEESCALE2} - {item.V_VILLEESCALE3}
              </Text>
              <Text style={styles.txt_white_sub2}>
                Escale : {item.V_VILLEESCALE4} - {item.V_VILLEESCALE5}
              </Text>

              <View style={styles.parent_white_sub}>
                <View style={styles.View_white_sub3}>
                  <AntDesign name="rightcircleo" size={20} color={'#fff'} style={styles.icon_sub3} />
                </View>
                <View style={styles.View_white_sub4}>
                  <Text style={styles.txt_white_sub3}>
                   Date de départ : {item.V_DATEDEPART}
                  </Text>
                </View>
              </View>

            </TouchableOpacity>
          </Stack>
        </Stack>
      </ScrollView>
    );
  }



  return (
    <NativeBaseProvider>
        <AwesomeLoading indicatorId={4} size={50} isActive={loader} text="Chargement" />
      <ImageBackground source={image} style={{ height }}>
        <Stack space={5} mt={0} height={'100%'}>
          {/* title */}
          <View style={styles.parent}>
            <View style={styles.left}>
              <IconButton onPress={() => { navigation.goBack() }} style={styles.iconleft} icon={<Icon size="xs" as={<AntDesign name="back" size={24} color="white" />} color="#fff" />} />
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '70%' }}>
              <Heading size="md" color='#35424a' textAlign='center'> Liste des voyages ({voyage.length}) </Heading>
            </View>
          </View>

          {/* search input */}
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
            <VStack width="90%">
              <Input
                onChangeText={(val) => {
                  onTypeChange(val)

                  // setSearchType(val) //Mise à jour du text
                }}
                // value={setSearchType}
                placeholder="Recherche"
                variant="filled"
                width="100%"
                // bg="gray.200"
                bg="#fff"
                borderRadius={10}
                borderColor={'muted.300'}
                py={1}
                px={2}
                _web={{
                  _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
                }}
                InputLeftElement={<Icon size='sm' ml={2} size={5} color="gray.400" as={<Ionicons name="ios-search" />} />}
              />
            </VStack>
          </View>
          {/* search input */}
          {voyage.length == 0 ? <Text>NoData</Text> :
            <FlatList
              data={listDATA.length == 0 ? voyage : listDATA}
              renderItem={_renderItem}
              keyExtractor={item => item.V_ID.toString()}
            // ItemSeparatorComponent = {() => <View style={styles.separator} />}
            />}


          <Box></Box>
          <Box></Box>
          <Box></Box>

        </Stack>

      </ImageBackground>
    </NativeBaseProvider>
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
    height: 180,
    backgroundColor: '#c3b27f',
    // alignItems:'center', 
    borderColor: '#c3b27f',
    borderWidth: 1,
    borderRadius: 10
  },
  txt_white: {
    fontSize: 14,
    color: '#336e7b',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 5,
  },
  txt_white_sub: {
    marginLeft: 10,
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
  },
  txt_white_sub2: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 11,
    color: 'white',
    fontWeight: 'bold',
  },
  txt_white_sub3: {
    textAlign: 'right',
    marginRight: 10,
    fontSize: 11,
    color: 'white',
    fontWeight: 'bold',
  },
  icon_sub3: {
    marginRight: 10,
    textAlign: 'right',
  },
  parent_white_sub: {
    height: 100,
    // alignItems: 'space-around',
    bottom: 12,

    // backgroundColor: 'red',
  },
  View_white_sub3: {
    height: 35,
    bottom: 40,
  },
  View_white_sub4: {
    height: 30,
    bottom: 5,
  },
});
