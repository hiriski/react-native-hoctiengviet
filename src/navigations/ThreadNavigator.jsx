import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constants';

import DiscussionListScreen from '../screens/DiscussionListScreen';
import DiscussionDetailScreen from '../screens/DiscussionDetailScreen';

const Stack = createStackNavigator();

const ThreadNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={ROUTES.DISCUSSION_LIST}
        component={DiscussionListScreen}
      />
      <Stack.Screen
        name={ROUTES.DISCUSSION_DETAILS}
        component={DiscussionDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default ThreadNavigator;
