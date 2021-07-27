import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Sidebar
import SidebarComponent from './components/_Shared/Sidebar/index';

// Pages
import LoginComponent from './components/Login/index';
import DashboardComponent from './components/Dashboard/index';
import FolderComponent from './components/Folder/Folder.component';
import AddFeatComponent from './components/AddFeat/AddFeat.component';
import SinistreComponent from './components/Sinistre/Sinistre.component';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationApp = ({}) => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login"
            drawerContent={props => <SidebarComponent {...props} />}
        >
            <Drawer.Screen options={{ swipeEnabled: false }} name="Login" component={LoginComponent} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="Dashboard" component={DashboardComponent} options={{headerLeft: () => null}}/>
            <Drawer.Screen options={{ swipeEnabled: false }} name="Folder" component={FolderComponent} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="AddFeat" component={AddFeatComponent} />
            <Drawer.Screen options={{ swipeEnabled: false }} name="Sinistre" component={SinistreComponent} />
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