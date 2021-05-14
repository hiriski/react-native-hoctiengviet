import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../containers/CustomTabBar';

// screens
import ChillaxScreen from '../screens/ChillaxScreen';
import CreatePhrase from '../screens/phrasebook/CreatePhrase';
import ProfileScreen from '../screens/account/ProfileScreen';
import DrawerNavigator from './DrawerNavigator';
import ConversationStackNavigator from './ConversationStackNavigator';
import {MAIN_STACK, TAB} from '../config/navigator';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
        }}
        name={TAB.DRAWER}
        component={DrawerNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Chillax',
        }}
        name={TAB.CHILLAX}
        component={ChillaxScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Add',
        }}
        name={TAB.ADD}
        component={CreatePhrase}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Chat',
        }}
        name={MAIN_STACK.CONVERSATION}
        component={ConversationStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
        }}
        name={TAB.ACCOUNT}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
