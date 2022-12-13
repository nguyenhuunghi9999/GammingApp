import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import { AuthProvider } from './src/context/AuthContext';
import AppNav from './src/navigation/AppNav';



function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>

    
  );
}
export default App

