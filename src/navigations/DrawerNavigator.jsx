import React from 'react';
import {useWindowDimensions, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerContent from '../containers/DrawerContent';

import {HOME_DRAWER} from '../config/navigator';
import HomeScreen from '../screens/home';
import PhrasebookListScreen from '../screens/phrasebook/PhrasebookList';
import {useSelector} from 'react-redux';
import {grey9} from '../components/config/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  const {theme} = useSelector(state => state.common);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      edgeWidth={60}
      drawerStyle={[{backgroundColor: theme === "light" ? 'white' : grey9}, isLargeScreen ? null : {width: '75%'}]}
      backBehavior="none"
      drawerType="front"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={HOME_DRAWER.HOME}
        component={HomeScreen}
      />
      <Drawer.Screen
        name={HOME_DRAWER.PHRASEBOOK_LIST}
        component={PhrasebookListScreen}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {},
  drawerStyle: {},
});

export default DrawerNavigator;
