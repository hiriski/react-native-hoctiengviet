/**
 * Custom Drawer Item
 */

import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableNativeFeedback, StyleSheet, Dimensions} from 'react-native';
import {Icon, Text} from '@ui-kitten/components';

const DrawerItem = ({onPress, label, iconName}) => {
  const isFocused = false;
  return (
    <TouchableNativeFeedback
      underlayColor="#ebebeb"
      style={[
        styles.root,
        isFocused ? styles.activeDrawerItem : styles.inactiveDrawerItem,
      ]} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Icon name={iconName} fill="#505050" style={styles.icon} />
          <Text
            category="h1"
            style={[
              styles.label,
              isFocused ? styles.activeLabel : styles.inactiveLabel,
            ]}>
            {label}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const height = Dimensions.get('window').height;
const DRAWER_ITEM_HEIGHT = height > 640 ? 50 : 44;

const styles = StyleSheet.create({
  root: {
  },
  container: {
    paddingHorizontal: height > 640 ? 30 : 24,
  },
  activeDrawerItem: {
  },
  inactiveDrawerItem: {},
  itemContainer: {
    height: DRAWER_ITEM_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
  },
  activeLabel: {

  },
  inactiveLabel: {

  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 24,
  },
});

DrawerItem.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string,
};

export default DrawerItem;
