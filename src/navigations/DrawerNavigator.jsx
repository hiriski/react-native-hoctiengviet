import React from 'react';
import {useWindowDimensions, StyleSheet} from 'react-native';
import {ROUTES} from '../constants';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeTabNavigatorV3 from './HomeTabNavigatorV3';

import DrawerContent from '../containers/DrawerContent';

import {HOME_DRAWER} from '../config/navigator';
import PhrasebookListScreen from '../screens/phrasebook/PhrasebookList';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      initialRouteName={HOME_DRAWER.TAB}
      screenOptions={{
        headerShown: false,
      }}
      edgeWidth={60}
      drawerStyle={[styles.drawerStyle, isLargeScreen ? null : {width: '75%'}]}
      backBehavior="none"
      drawerType="front"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name={HOME_DRAWER.TAB} component={HomeTabNavigatorV3} />
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
