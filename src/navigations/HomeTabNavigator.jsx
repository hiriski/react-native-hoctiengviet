import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../containers/CustomTabBar';

// screens
import ChillaxScreen from '../screens/ChillaxScreen';
import CreatePhrase from '../screens/phrasebook/CreatePhrase';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/account/ProfileScreen';

import {TAB} from '../config/navigator';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
        }}
        name={TAB.HOME}
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
        name={TAB.CHAT}
        component={ChatScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profil',
        }}
        name={TAB.ACCOUNT}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
