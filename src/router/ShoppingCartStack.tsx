import * as React from 'react';
import ShoppingCartScreen from '../screens/ShopingCartScreen';
import AddressScreen from '../screens/AddressScreen'; 

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ShopingCartS = createNativeStackNavigator();

const ShopingCartStack = () => {
 
  return (

   
    <ShopingCartS.Navigator >
      <ShopingCartS.Screen 
      component={ShoppingCartScreen} 
       name="ShoppingCartScreen"       
       options={{ 
        headerShown: false,
        title :'Shopping'}}      
      />
      <ShopingCartS.Screen 
      component={AddressScreen}       
      name="AddressScreen"       
      options={{ title :'Address'}}      
     />    
    </ShopingCartS.Navigator>
  
   
  );
};


export default ShopingCartStack;
