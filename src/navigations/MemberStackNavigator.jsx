import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants';

import MemberListScreen from '../screens/MemberListScreen';
import MemberDetailsScreen from '../screens/MemberDetailsScreen';

const Stack = createStackNavigator();

const MemberStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.MEMBER_LIST} component={MemberListScreen} />
      <Stack.Screen
        name={ROUTES.MEMBER_DETAILS}
        component={MemberDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MemberStackNavigator;
