import React from 'react';
import { Provider } from "react-redux";
import store from "./src/redux/store";
import NavigationApp from './src/navigation.nav';

export default function App() {
  return (
    <Provider store={store}>
        <NavigationApp style="auto" />
    </Provider>
  );
}