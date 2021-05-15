import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './HomeTabNavigator';
import PhrasebookCategoryListScreen from '../screens/phrasebook/CategoryList';
import PhrasebookListScreen from '../screens/phrasebook/PhrasebookList';
import ProfileScreen from '../screens/account/ProfileScreen';
import NotificationScreen from '../screens/notifications';
import ConversationStackNavigator from './ConversationStackNavigator';
import {MAIN_STACK} from '../config/navigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={MAIN_STACK.HOME_TAB} component={HomeTabNavigator} />
      <Stack.Screen
        name={MAIN_STACK.CATEGORY_LIST}
        component={PhrasebookCategoryListScreen}
      />
      <Stack.Screen
        name={MAIN_STACK.PHRASEBOOK_LIST}
        component={PhrasebookListScreen}
      />
      <Stack.Screen name={MAIN_STACK.ACCOUNT} component={ProfileScreen} />
      <Stack.Screen
        name={MAIN_STACK.NOTIFICATION}
        component={NotificationScreen}
      />
      <Stack.Screen
        name={MAIN_STACK.CONVERSATION}
        component={ConversationStackNavigator}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
