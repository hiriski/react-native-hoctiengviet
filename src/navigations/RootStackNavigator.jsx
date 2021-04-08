import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants';

/* screens */
import OnBoardingScreen from '../screens/OnBoardingScreen';
import DrawerNavigator from './DrawerNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import NotificationScreen from '../screens/NotificationScreen';

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  const isAuthenticated = false;
  const isAlreadyLaunched = true;
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          headerShown: false,
        }}>
        {!isAlreadyLaunched ? (
          <Stack.Screen name={ROUTES.ONBOARDING} component={OnBoardingScreen} />
        ) : isAuthenticated ? (
          <Stack.Screen name={ROUTES.HOME} component={DrawerNavigator} />
        ) : (
          <>
            <Stack.Screen
              name={ROUTES.NOTIFICATION}
              component={NotificationScreen}
            />
            <Stack.Screen name={ROUTES.AUTH} component={AuthStackNavigator} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
