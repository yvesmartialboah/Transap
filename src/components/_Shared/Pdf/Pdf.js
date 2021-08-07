import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Camera, CameraType, CameraScreen } from 'react-native-camera-kit';

export default function PDFComponent() {
  const hideSplash = () => {
    SplashScreen.hide();
  }

  useEffect(() => {
    hideSplash();
  }, []);

  async function capturePhoto() {
    await this.camera.capture();
  }

  return (

    <View>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>

      <View style={styles.camera}>
        <CameraScreen

          // Barcode props
          scanBarcode={true}
          onReadCode={(event) => {
            Alert.alert('QR code found')
            console.log(event.nativeEvent.codeStringValue, 'value')
          }} // optional
          showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
          laserColor='red' // (default red) optional, color of laser in scanner frame
          frameColor='white' // (default white) optional, color of border of scanner frame
        />
        {/* <CameraScreen
          actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
          onBottomButtonPressed={(event) => console.log(event)}
          cameraType={CameraType.Back} // front/back(default)
          // flashImages={{
          //   // optional, images for flash state
          //   on: require('path/to/image'),
          //   off: require('path/to/image'),
          //   auto: require('path/to/image'),
          // }}
          // cameraFlipImage={require('path/to/image')} // optional, image for flipping camera button
          captureButtonImage={require('../../../../assets/favicon.png')} // optional, image capture button
          // torchOnImage={require('path/to/image')} // optional, image for toggling on flash light
          // torchOffImage={require('path/to/image')} // optional, image for toggling off flash light
          hideControls={false} // (default false) optional, hides camera controls
          showCapturedImageCount={false} // (default false) optional, show count for photos taken during that capture session
          showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
          laserColor='green' // (default red) optional, color of laser in scanner frame
          frameColor='white' // (default white) optional, color of border of scanner frame
        /> */}
      </View>

      <TouchableOpacity
        onPress={() => {
          capturePhoto()
        }}
        style={styles.section}>
        <Text>Capture Photo</Text>
      </TouchableOpacity>


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
  },
  camera: {
    height: 600,
  }
});
