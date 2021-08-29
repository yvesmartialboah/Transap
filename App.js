import React from 'react';
import { Provider } from "react-redux";
import store from "./src/redux/store";
import NavigationApp from './src/navigation.nav';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
        <NavigationApp style="auto" />
        <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  );
}