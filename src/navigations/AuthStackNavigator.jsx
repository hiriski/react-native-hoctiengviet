import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import {AUTH_STACK} from '../config/navigator';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AUTH_STACK.LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AUTH_STACK.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={AUTH_STACK.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
