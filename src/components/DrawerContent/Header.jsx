/**
 * Custom Drawer Header
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';

const DrawerHeader = () => {
  return (
    <View style={styles.root}>
      <Text>Drawer Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DrawerHeader;
