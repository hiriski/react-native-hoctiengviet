import React from 'react';
import {ROUTES} from '../constants';
import {createDrawerNavigator} from '@react-navigation/drawer';

/* screens */
import ProfileScreen from '../screens/ProfileScreen';
import SongScreen from '../screens/SongScreen';
import ChatScreen from '../screens/ChatScreen';
// import AboutScreen from '../screens/AboutScreen';
// import ContactScreen from '../screens/ContactScreen';
// import FavoriteScreen from '../screens/FavoriteScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
      <Drawer.Screen name={ROUTES.SONG} component={SongScreen} />
      <Drawer.Screen name={ROUTES.CHAT} component={ChatScreen} />
      {/* <Drawer.Screen name={ROUTES.FAVORITE} component={FavoriteScreen} />
      <Drawer.Screen name={ROUTES.SETTINGS} component={SettingsScreen} />
      <Drawer.Screen name={ROUTES.ABOUT} component={AboutScreen} />
      <Drawer.Screen name={ROUTES.CONTACT} component={ContactScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
