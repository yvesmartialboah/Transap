import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Sidebar
import SidebarComponent from './components/_Shared/Sidebar/index';
import PDFComponent from './components/_Shared/Pdf/Pdf';

// Pages
import LoginComponent from './components/Login/index';
import DashboardComponent from './components/Dashboard/index';
import ParamServeurComponent from './components/ParamServeur/ParamServeur';
import ParamLogoComponent from './components/ParamLogo/ParamLogo';
import TicketsNonVenduComponent from './components/TicketsVendu/TicketsNonVendu.component';
import TicketsScannerComponent from './components/TicketsScanner/TicketsScanner.component';
import ListVoyageComponent from './components/ListVoyage/ListVoyage.component';
import AddFeatComponent from './components/AddFeat/AddFeat.component';
import BuyTicketComponent from './components/BuyTicket/BuyTicket.component';
import ScanQrCodeComponent from './components/ScanQrCode/ScanQrCode.component';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationApp = ({}) => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login"
            drawerContent={props => <SidebarComponent {...props} />}
        >
            <Drawer.Screen options={{ swipeEnabled: false }} name="Login" component={LoginComponent} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="Dashboard" component={DashboardComponent} options={{headerLeft: () => null}}/>
            <Drawer.Screen options={{ swipeEnabled: false }} name="ParamServeur" component={ParamServeurComponent} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="ParamLogo" component={ParamLogoComponent} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="TicketsNonVendu" component={TicketsNonVenduComponent} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="TicketsScanner" component={TicketsScannerComponent} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="ListVoyage" component={ListVoyageComponent} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="AddFeat" component={AddFeatComponent} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="BuyTicket" component={BuyTicketComponent} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="ScanQrCode" component={ScanQrCodeComponent} />

            {/*  */}
            <Drawer.Screen options={{ swipeEnabled: false }} name="PDF" component={PDFComponent} />
        </Drawer.Navigator>
    </NavigationContainer>
);

export default NavigationApp;


/* 
<Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
>
  <Stack.Screen name="route-name" component={ScreenComponent} />
</Stack.Navigator>
*/