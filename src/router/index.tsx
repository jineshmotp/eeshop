import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './BottomTabNav';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Router = () => {
 
  return (

    <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen component={BottomTabNav} name="HomeTabNav" />
    </Stack.Navigator>
  </NavigationContainer>
   
  );
};


export default Router;
