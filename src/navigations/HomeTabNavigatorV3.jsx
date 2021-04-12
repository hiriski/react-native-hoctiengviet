import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from '../constants';
import CustomTabBar from '../components/CustomTabBar';

// screens
import HomeScreen from '../screens/HomeScreen';
import ChillaxScreen from '../screens/ChillaxScreen';
import CreateDiscussionScreen from '../screens/CreateDiscussionScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigatorV3 = () => {
  return (
    <>
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen
          options={{
            tabBarLabel: 'Home',
          }}
          name={ROUTES.HOME}
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Chillax',
          }}
          name={ROUTES.CHILLAX}
          component={ChillaxScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Add',
          }}
          name={ROUTES.CREATE}
          component={CreateDiscussionScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Chat',
          }}
          name={ROUTES.CHAT}
          component={ChatScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Profil',
          }}
          name={ROUTES.PROFILE}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default HomeTabNavigatorV3;
