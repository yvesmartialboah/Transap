import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default function PDFComponent() {
  const hideSplash = () => {
    SplashScreen.hide();
  }

  useEffect(() => {
    hideSplash();
  }, []);

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }
            h1 {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Hello, UppLabs!</h1>
    </body>
    </html>
`;

//   const createPDF = async (html) => {
//     try {
//         const { uri } = await Print.printToFileAsync({ html });
//         return uri;
//     } catch (err) {
//         console.error(err);
//     }
// };
  // const source = 'http://samples.leanpub.com/thereactnativebook-sample.pdf';
  return (
    
        <View >
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>

        {/* <TouchableOpacity onPress={() => {
            createPDF()
        }} style={styles.section}>
          <Text>Section #2</Text>
        </TouchableOpacity> */}
        
        </View>

  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    // margin: 10,
    // padding: 10,
    // flexGrow: 1
  },
  bg: {
    // backgroundColor: 'red',
    color: 'black',
  }
});
