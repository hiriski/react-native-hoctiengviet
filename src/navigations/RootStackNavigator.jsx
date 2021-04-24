import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants';

/* screens */
import OnboardScreen from '../screens/OnboardScreen';
import DrawerNavigator from './DrawerNavigator';
import AuthStackNavigator from './AuthStackNavigator';

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  const isAlreadyLaunched = false;
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          headerShown: false,
        }}>
        {!isAlreadyLaunched ? (
          <Stack.Screen name={ROUTES.ONBOARDING} component={OnboardScreen} />
        ) : (
          <>
            <Stack.Screen
              name={ROUTES.ROOT_STACK}
              component={DrawerNavigator}
            />
            <Stack.Screen name={ROUTES.AUTH} component={AuthStackNavigator} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
