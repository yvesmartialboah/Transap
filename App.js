import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import NavigationApp from './src/navigation.nav';
import Toast from 'react-native-toast-message';
import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationApp style="auto" />
        <Toast ref={ref => Toast.setRef(ref)} />
      </PaperProvider>
    </Provider>
  );
}
