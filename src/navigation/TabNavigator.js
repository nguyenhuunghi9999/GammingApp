import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavariteScreen from '../screens/FavariteScreen';
import { Ionicons, Feather } from '@expo/vector-icons'; 
import GameDetailsScreen from '../screens/GameDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GameDetails"
          component={GameDetailsScreen}
          options={({route}) => ({
            title: route.params?.title,
          })}
        />
      </Stack.Navigator>
    );
  };
  
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: '#AD40AF'},
          tabBarInactiveTintColor: '#fff',
          tabBarActiveTintColor: 'yellow',
        }}>
        <Tab.Screen
          name="Home2"
          component={HomeStack}
          options={({route}) => ({
            tabBarStyle: {
              display: getTabBarVisibility(route),
              backgroundColor: '#AD40AF',
            },
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          })}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarBadge: 3,
            tabBarBadgeStyle: {backgroundColor: 'yellow'},
            tabBarIcon: ({color, size}) => (
              <Feather name="shopping-bag" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favarite"
          component={FavariteScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="heart-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  
  const getTabBarVisibility = route => {
    // console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    // console.log(routeName);
  
    if( routeName == 'GameDetails' ) {
      return 'none';
    }
    return 'flex';
  };

export default TabNavigator