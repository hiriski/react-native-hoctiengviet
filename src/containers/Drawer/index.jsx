/**
 * Custom Drawer Content
 */

import React from 'react';
import { View, StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import DrawerHeader from './DrawerHeader';
import DrawerListItem from './DrawerListItem';
import ToggleTheme from './ToggleTheme';

const Drawer = ({state, descriptors, navigation}) => {
  return (
    <DrawerContentScrollView style={styles.root}>
      <View style={styles.container}>
        <DrawerHeader />
        <DrawerListItem />
        <ToggleTheme/>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {},
});

export default Drawer;
