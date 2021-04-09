import React from 'react';
import {useWindowDimensions, StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';

import {COLORS, ROUTES} from '../constants';
import {createDrawerNavigator} from '@react-navigation/drawer';

/* screens */
import ProfileScreen from '../screens/ProfileScreen';
import SongScreen from '../screens/SongScreen';
import ChatScreen from '../screens/ChatScreen';
// import HomeScreen from '../screens/HomeScreen';
import HomeTabNavigatorV2 from './HomeTabNavigatorV2';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import SettingsScreen from '../screens/SettingsScreen';

import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.TAB}
      screenOptions={{
        headerShown: false,
      }}
      edgeWidth={60}
      drawerStyle={[styles.drawerStyle, isLargeScreen ? null : {width: '80%'}]}
      backBehavior="none"
      drawerType="front"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        options={{drawerLabel: 'Home'}}
        name={ROUTES.TAB}
        component={HomeTabNavigatorV2}
      />
      <Drawer.Screen
        options={{drawerLabel: 'Profile'}}
        name={ROUTES.PROFILE}
        component={ProfileScreen}
      />
      <Drawer.Screen name={ROUTES.SONG} component={SongScreen} />
      <Drawer.Screen name={ROUTES.CHAT} component={ChatScreen} />
      <Drawer.Screen name={ROUTES.FAVORITE} component={FavoriteScreen} />
      <Drawer.Screen name={ROUTES.SETTINGS} component={SettingsScreen} />
      <Drawer.Screen name={ROUTES.ABOUT} component={AboutScreen} />
      <Drawer.Screen name={ROUTES.CONTACT} component={ContactScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {},
  drawerStyle: {},
});

export default DrawerNavigator;
