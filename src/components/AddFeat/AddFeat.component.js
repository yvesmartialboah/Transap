import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { Box, VStack, Stack, Center, Heading, IconButton, Icon, Button, NativeBaseProvider, Input } from "native-base"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function AddFeatComponent({ navigation }) {
    const image = require("../../../assets/bgn.png");
    const logo_redi = require("../../../assets/logo_redi.png");
    const { height } = Dimensions.get('window');

    useEffect(() => {
        // 
    }, []);

    return (
        
            <ImageBackground source={image} style={{ height }}>
                <NativeBaseProvider>
                <ScrollView>

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

                        <TouchableOpacity
                            style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                            onPress={() => {
                                navigation.navigate('Sinistre')
                            }}
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
                        </TouchableOpacity>

                        {/*  */}

                        <TouchableOpacity
                            style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                            onPress={() => { }}
                        >
                            <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                                <View style={styles.round}>
                                    <View style={styles.v1}>
                                        {/* <Text>d</Text> */}
                                    </View>
                                    <View style={styles.v2}>
                                        <Text style={styles.txt_white}>
                                            Caractéristique Véhicule
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <AntDesign name="checkcircleo" size={22} color="black" />
                                    </View>
                                </View>
                            </Stack>
                        </TouchableOpacity>

                        {/*  */}

                        <TouchableOpacity
                            style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                            onPress={() => { }}
                        >
                            <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                                <View style={styles.round}>
                                    <View style={styles.v1}>
                                        {/* <Text>d</Text> */}
                                    </View>
                                    <View style={styles.v2}>
                                        <Text style={styles.txt_white}>
                                            Complément d'information
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <AntDesign name="checkcircleo" size={22} color="black" />
                                    </View>
                                </View>
                            </Stack>
                        </TouchableOpacity>

                        {/*  */}

                        <TouchableOpacity
                            style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                            onPress={() => { }}
                        >
                            <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                                <View style={styles.round2}>
                                    <View style={styles.v1}>
                                        {/* <Text>d</Text> */}
                                    </View>
                                    <View style={styles.v2}>
                                        <Text style={styles.txt_white}>
                                            Point de choc & circonstance de l'accident
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <AntDesign name="checkcircleo" size={22} color="black" />
                                    </View>
                                </View>
                            </Stack>
                        </TouchableOpacity>

                        {/*  */}

                        <TouchableOpacity
                            style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                            onPress={() => { }}
                        >
                            <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                                <View style={styles.round}>
                                    <View style={styles.v1}>
                                        {/* <Text>d</Text> */}
                                    </View>
                                    <View style={styles.v2}>
                                        <Text style={styles.txt_white}>
                                            Main d'oeuvre
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <AntDesign name="checkcircleo" size={22} color="black" />
                                    </View>
                                </View>
                            </Stack>
                        </TouchableOpacity>

                        {/*  */}

                        <TouchableOpacity
                            style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                            onPress={() => { }}
                        >
                            <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                                <View style={styles.round}>
                                    <View style={styles.v1}>
                                        {/* <Text>d</Text> */}
                                    </View>
                                    <View style={styles.v2}>
                                        <Text style={styles.txt_white}>
                                            Peinture
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <AntDesign name="checkcircleo" size={22} color="black" />
                                    </View>
                                </View>
                            </Stack>
                        </TouchableOpacity>

                        {/*  */}

                        <TouchableOpacity
                            style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                            onPress={() => { }}
                        >
                            <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                                <View style={styles.round}>
                                    <View style={styles.v1}>
                                        {/* <Text>d</Text> */}
                                    </View>
                                    <View style={styles.v2}>
                                        <Text style={styles.txt_white}>
                                            Rubrique Honoraire
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <AntDesign name="checkcircleo" size={22} color="black" />
                                    </View>
                                </View>
                            </Stack>
                        </TouchableOpacity>

                        {/*  */}

                        <TouchableOpacity
                            style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                            onPress={() => { }}
                        >
                            <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                                <View style={styles.round}>
                                    <View style={styles.v1}>
                                        {/* <Text>d</Text> */}
                                    </View>
                                    <View style={styles.v2}>
                                        <Text style={styles.txt_white}>
                                            Photos
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <AntDesign name="checkcircleo" size={22} color="black" />
                                    </View>
                                </View>
                            </Stack>
                        </TouchableOpacity>

                        {/*  */}

                        <TouchableOpacity
                            style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                            onPress={() => { }}
                        >
                            <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                                <View style={styles.round}>
                                    <View style={styles.v1}>
                                        {/* <Text>d</Text> */}
                                    </View>
                                    <View style={styles.v2}>
                                        <Text style={styles.txt_white}>
                                            Infos Quittance
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <AntDesign name="checkcircleo" size={22} color="black" />
                                    </View>
                                </View>
                            </Stack>
                        </TouchableOpacity>

                        {/*  */}

                        <TouchableOpacity
                            style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%' }}
                            onPress={() => { }}
                        >
                            <Stack direction={'column'} space={5} mb={0} style={styles.stack}>
                                <View style={styles.round}>
                                    <View style={styles.v1}>
                                        {/* <Text>d</Text> */}
                                    </View>
                                    <View style={styles.v2}>
                                        <Text style={styles.txt_white}>
                                            Note d'expertise et date
                                        </Text>
                                    </View>
                                    <View style={styles.v3}>
                                        <AntDesign name="checkcircleo" size={22} color="black" />
                                    </View>
                                </View>
                            </Stack>
                        </TouchableOpacity>

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
});

