/**
 * Custom Drawer Content
 */

import React from 'react';
import {Linking, View, TouchableHighlight, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Icon, Text} from '@ui-kitten/components';
import {ROUTES, COLORS} from '../../constants';
import DrawerHeader from './Header';

const DrawerContent = ({state, descriptors, navigation}) => {
  console.log(navigation);
  const renderDrawerItemIcon = ({routeName, fill}) => {
    let iconName;
    if (routeName === ROUTES.TAB) {
      iconName = 'layers';
    } else if (routeName === ROUTES.PROFILE) {
      iconName = 'person';
    } else if (routeName === ROUTES.CHILLAX) {
      iconName = 'headphones';
    } else if (routeName === ROUTES.SONG) {
      iconName = 'headphones';
    } else if (routeName === ROUTES.CHAT) {
      iconName = 'message-circle';
    } else if (routeName === ROUTES.FAVORITE) {
      iconName = 'heart';
    } else if (routeName === ROUTES.SETTINGS) {
      iconName = 'settings';
    } else if (routeName === ROUTES.ABOUT) {
      iconName = 'info';
    } else if (routeName === ROUTES.CONTACT) {
      iconName = 'email';
    } else {
      iconName = 'home';
    }
    return <Icon name={iconName} fill={fill} style={styles.icon} />;
  };
  return (
    <DrawerContentScrollView style={styles.root}>
      <DrawerHeader />
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        console.log(options);
        const label =
          options.drawerLabel !== undefined
            ? options.drawerLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableHighlight
            key={label}
            underlayColor={COLORS.primaryLight}
            style={[
              styles.drawerItem,
              isFocused ? styles.activeDrawerItem : styles.inactiveDrawerItem,
            ]}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={styles.itemContainer}>
              {renderDrawerItemIcon({
                routeName: route.name,
                fill: isFocused ? COLORS.primary : COLORS.textSecondary,
              })}
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
      })}
    </DrawerContentScrollView>
  );
};

const DRAWER_ITEM_HEIGHT = 54;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  drawerItemList: {
    height: DRAWER_ITEM_HEIGHT,
    margin: 0,
  },
  drawerItem: {},
  activeDrawerItem: {
    backgroundColor: COLORS.primaryLight,
  },
  inactiveDrawerItem: {},
  itemContainer: {
    height: DRAWER_ITEM_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
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
    height: 22,
    width: 22,
    marginRight: 22,
  },
});

export default DrawerContent;
