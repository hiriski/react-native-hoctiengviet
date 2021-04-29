import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../containers/CustomTabBar';

// screens
import HomeScreen from '../screens/HomeScreen';
import ChillaxScreen from '../screens/ChillaxScreen';
import CreatePhrase from '../screens/phrasebook/CreatePhrase';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

import {TAB} from '../config/navigator';

const Tab = createBottomTabNavigator();

const HomeTabNavigatorV3 = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
        }}
        name={TAB.HOME}
        component={HomeScreen}
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

export default HomeTabNavigatorV3;
