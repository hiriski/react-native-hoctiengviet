import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/* screens */
import OnboardScreen from '../screens/OnboardScreen';
import DrawerNavigator from './DrawerNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import {useSelector} from 'react-redux';
import PhrasebookListScreen from '../screens/phrasebook/PhrasebookList';

import {ROOT_STACK} from '../config/navigator';

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  const isAlreadyLaunched = true;
  const {token} = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          headerShown: false,
        }}>
        {!isAlreadyLaunched ? (
          <Stack.Screen name={ROOT_STACK.ONBOARD} component={OnboardScreen} />
        ) : (
          <React.Fragment>
            {token ? (
              <React.Fragment>
                <Stack.Screen
                  name={ROOT_STACK.HOME_DRAWER}
                  component={DrawerNavigator}
                />
              </React.Fragment>
            ) : (
              /**
               * Allow stranger accessing homepage
               */
              <React.Fragment>
                <Stack.Screen
                  name={ROOT_STACK.HOME_DRAWER}
                  component={DrawerNavigator}
                />
                <Stack.Screen
                  name={ROOT_STACK.AUTH}
                  component={AuthStackNavigator}
                />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
