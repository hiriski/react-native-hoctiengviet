import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants';

/* screens */
import OnBoardingScreen from '../screens/OnBoardingScreen';
import HomeTabNavigator from './HomeTabNavigator';
import MemberStackNavigator from './MemberStackNavigator';
// import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTES.ONBOARDING} component={OnBoardingScreen} />
        <Stack.Screen name={ROUTES.HOME} component={HomeTabNavigator} />
        <Stack.Screen name={ROUTES.MEMBER} component={MemberStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
