import React from 'react'

// import HomeScreen from '../screens/HomeScreen'

import { Ionicons } from '@expo/vector-icons'; 

import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import MessageScreen from '../screens/MessageScreen';
import MomentScreen from '../screens/MomentScreen';
import SettingScreen from '../screens/SettingScreen';
import CustomDrawer from '../components/CustomDrawer';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();


const AppStack = () => {
  return (
    <Drawer.Navigator 
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
    }}
    >
        <Drawer.Screen component={TabNavigator} name='Home' options={{
            drawerIcon: ({color}) => (
                <Ionicons name="home-outline" size={22} color={color} />
              ),
        }}  />
        <Drawer.Screen component={ProfileScreen} name='Profile'
        options={{
            drawerIcon: ({color}) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}  />
        <Drawer.Screen component={MessageScreen} name='Message' 
        options={{
            drawerIcon: ({color}) => (
              <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
            ),
          }} />
        <Drawer.Screen component={MomentScreen} name='Moment' 
        options={{
            drawerIcon: ({color}) => (
              <Ionicons name="timer-outline" size={22} color={color} />
            ),
          }} />
        <Drawer.Screen component={SettingScreen} name='Setting' options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }} />
    </Drawer.Navigator>
  )
}

export default AppStack