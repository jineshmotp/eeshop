import React from 'react';
import { StatusBar,View,useColorScheme, } from 'react-native';
import {StripeProvider} from '@stripe/stripe-react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'

import {withAuthenticator} from 'aws-amplify-react-native';

Amplify.configure(awsconfig)

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />      
      <StripeProvider publishableKey="pk_test_51LL3LwDVK4nhjr3qZGSwM2azDfnywST41VqOaJod5eKZKtgfBUy4006Fu1q6eEHUS0ApAHqc9XM17wwaZJbSMaEP00mEracOyL">
        <Router />
      </StripeProvider>
    </View>
  );
};

export default withAuthenticator(App);