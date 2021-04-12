/**
 * Custom Drawer Item
 */

import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';
import {Icon, Text} from '@ui-kitten/components';
import {ROUTES, COLORS} from '../../constants';
import {useNavigation, useRoute} from '@react-navigation/core';

const DrawerItem = ({onPress, label, iconName}) => {
  const isFocused = false;
  return (
    <TouchableHighlight
      underlayColor="#ebebeb"
      style={[
        styles.drawerItem,
        isFocused ? styles.activeDrawerItem : styles.inactiveDrawerItem,
      ]}
      accessibilityRole="button"
      onPress={onPress}>
      <View style={styles.itemContainer}>
        <Icon name={iconName} fill="#505050" style={styles.icon} />
        <Text
          category="h1"
          style={[
            styles.label,
            isFocused ? styles.activeLavel : styles.inactiveLabel,
          ]}>
          {label}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const height = Dimensions.get('window').height;
const DRAWER_ITEM_HEIGHT = height > 640 ? 52 : 46;

const styles = StyleSheet.create({
  drawerItem: {
    paddingHorizontal: height > 640 ? 30 : 24,
  },
  activeDrawerItem: {
    backgroundColor: COLORS.primaryLight,
  },
  inactiveDrawerItem: {},
  itemContainer: {
    height: DRAWER_ITEM_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
  },
  activeLavel: {
    color: COLORS.textPrimary,
  },
  inactiveLabel: {
    color: COLORS.textSecondary,
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
