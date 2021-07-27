import React, {useState, useEffect} from "react"
import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { Box, VStack, Stack, Center, Heading, IconButton, Icon, Button, NativeBaseProvider, Input } from "native-base"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function FolderComponent({ navigation }) {
  const [searchType, setSearchType] = useState('');
  const image = require('../../../assets/bgn.png');
  const { height } = Dimensions.get('window');
  const DATA = [
    {
      id: 'bd7acbea-c1b1-464c2-aed5-3ad53abb28bazqs',
      title: 'DM-0065/20',
      name: 'BOAH MARTIAL',
      exp: 'Expertise',
      det: 'VOLE NON RETROUVE / Commune: (ND)',
      date: '2021-01-01',
    },
    {
      id: '3ac68afc-c605-48d3-a4f38-fbd91aa97f63za',
      title: 'DM-0067/20',
      name: 'Marco Polo',
      exp: 'Expertise',
      det: 'VOLE NON RETROUVE / Commune: (ND)',
      date: '2021-01-05',
    },
    {
      id: '58694a0f-3da1-4712f-bd96-145571e29d72z',
      title: 'DM-0065/20',
      name: 'INCONNU',
      exp: 'Expertise',
      det: 'VOLE NON RETROUVE / Commune: (ND)',
      date: '2021-01-07',
    },
    {
      id: '58694a0f-3da1-4471f-bd96-145571e29d72c',
      title: 'DM-0065/20',
      name: 'INCONNU',
      exp: 'Expertise',
      det: 'VOLE NON RETROUVE / Commune: (ND)',
      date: '2021-01-07',
    },
    {
      id: '58694a0f-3da1-4711f-bd96-145571e29d72z',
      title: 'DM-0065/20',
      name: 'INCONNU',
      exp: 'Expertise',
      det: 'VOLE NON RETROUVE / Commune: (ND)',
      date: '2021-01-07',
    }
  ];
  
  useEffect(() => {
    // 
  }, []);

  const [listDATA, setlistDATA] = useState(DATA);
  const [checkData, setcheckData] = useState(true);

  const onTypeChange = (val) => {

    let text = val.toLowerCase();
    let contentData = listDATA;
    let filteredName = contentData.filter((item) => {
      return item.name.toLowerCase().match(text)
    })

    if (!text || text === '') {
      setcheckData(true)
      setlistDATA(DATA)
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
            onPress={()=>{
              navigation.navigate('AddFeat')
            }}
          style={styles.round}>
            <Text style={styles.txt_white}>
              {item.title}
            </Text>
            <Text style={styles.txt_white_sub}>
              {item.name}
            </Text>
            <Text style={styles.txt_white_sub2}>
              Type d'expertise: {item.exp}
            </Text>
            <Text style={styles.txt_white_sub2}>
              {item.det}
            </Text>

            <View style={styles.parent_white_sub}>
              <View style={styles.View_white_sub3}>
                <AntDesign name="rightcircleo" size={20} color={'#fff'} style={styles.icon_sub3} />
              </View>
              <View style={styles.View_white_sub4}>
                <Text style={styles.txt_white_sub3}>
                  {item.date}
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
      <ImageBackground source={image} style={{ height }}>
        <Stack space={5} mt={0} height={'100%'}>
          {/* title */}
          <View style={styles.parent}>
            <View style={styles.left}>
              <IconButton onPress={() => { navigation.goBack() }} style={styles.iconleft} icon={<Icon size="xs" as={<AntDesign name="back" size={24} color="white" />} color="#fff" />} />
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '70%' }}>
              <Heading size="md" color='#35424a' textAlign='center'> Dossiers attribués (5) </Heading>
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
          {checkData == false ? <Text>NoData</Text> :
          <FlatList
            data={listDATA}
            renderItem={_renderItem}
            keyExtractor={item => item.id.toString()}
          // ItemSeparatorComponent = {() => <View style={styles.separator} />}
          />}  
          

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
    height: 100,
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
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  txt_white_sub3: {
    textAlign: 'right',
    marginRight: 10,
    fontSize: 10,
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
    bottom: 40,

    // backgroundColor: 'red',
  },
  View_white_sub3: {
    height: 35,
    // bottom: 15,
  },
  View_white_sub4: {
    height: 30,
    bottom: 6,
  },
});
