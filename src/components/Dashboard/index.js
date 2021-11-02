import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Stack,
  Center,
  Heading,
  IconButton,
  Icon,
  Button,
  NativeBaseProvider,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getUserConf} from '../../redux/selectors';
import {useSelector, useDispatch} from 'react-redux';

import DataTable, {COL_TYPES} from 'react-native-datatable-component';
// Paper
// import {DataTable} from 'react-native-paper';
import {backgroundColor} from 'styled-system';

const themeColor = '#2D4F6B';
export default function DashboardComponent({navigation, route}) {
  const image = require('../../../assets/bgn.png');
  const {height} = Dimensions.get('window');
  const userConf = useSelector(getUserConf);

  // Paper
  // const [page, setPage] = useState(0);
  // const numberOfItemsPerPageList = [2, 3, 4];
  // const [numberOfItemsPerPage, onItemsPerPageChange] = useState(
  //   numberOfItemsPerPageList[0],
  // );
  // const optionsPerPage = [2, 3, 4];
  // const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  const data = [
    {ID_Voyage: 58, Tickets_Vendu: 2, Tickets_Pointes : 5, Recette: 7},
    {ID_Voyage: 59, Tickets_Vendu: 2, Tickets_Pointes : 5, Recette: 7},
    {ID_Voyage: 60, Tickets_Vendu: 2, Tickets_Pointes : 5, Recette: 7},
  ];

  const nameOfCols = ['ID_Voyage', 'Tickets_Vendu', 'Tickets_Pointes', 'Recette'];

  useEffect(() => {
    // console.log(userConf, 'userConf');
  }, [route.params.reload.date]);

  return (
    <ScrollView style={{height}}>
      <ImageBackground source={image} style={{height}}>
        <NativeBaseProvider>
          <Stack space={5} mt={0} height={'80%'}>
            <View style={styles.parent}>
              <View style={styles.left}>
                <IconButton
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                  style={styles.iconleft}
                  icon={
                    <Icon
                      size="25"
                      as={<MaterialIcons name="menu" />}
                      color="#fff"
                    />
                  }
                />
              </View>
              <View style={{width: '60%'}}>
                <Heading size="lg" color="#35424a" textAlign="center">
                  Tableau de bord
                </Heading>
              </View>
            </View>

            <View
              style={{
                width: '100%',
                marginLeft: 5,
                marginRight: 5,
                textAlign: 'flex-end',
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'red'
              }}>
              {/* ID-Voyage  Tickets Vendu Tickets Pointés Recette/Voyage */}
              <DataTable
                onRowSelect={row => {
                  console.log('ROW => ', row);
                }}
                data={data}
                colNames={nameOfCols}
                noOfPages={10}
                colSettings={[{name: 'ID_Voyage', type: COL_TYPES.STRING}]}
              />
            </View>
          </Stack>
        </NativeBaseProvider>
      </ImageBackground>
    </ScrollView>
  );
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
    fontSize: 14,
  },
});
