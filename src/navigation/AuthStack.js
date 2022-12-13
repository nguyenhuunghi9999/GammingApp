import { View, Text } from 'react-native'
import React from 'react'
import BeginScreen from '../screens/BeginScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={BeginScreen} name='Begin' />
        <Stack.Screen component={LoginScreen} name='Login'  />
        <Stack.Screen component={RegisterScreen} name='Register'  />
        {/* <Stack.Screen component={HomeScreen} name='Home'  /> */}
      </Stack.Navigator>
  )
}

export default AuthStack