/**
 * Custom Tab Bar
 */

import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import TabBarItem from './TabBarItem';

const CustomTabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
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
            <TabBarItem
              key={route.name}
              route={route}
              isFocused={isFocused}
              label={label}
              onPress={onPress}
              onLongPress={onLongPress}
              options={options}
            />
          );
        })}
      </View>
    </View>
  );
};

const width = Dimensions.get('window').width;
const TAB_ITEM_COUNT = 5;
export const TAB_BAR_ITEM_SIZE = 48;
const CONTAINER_HEIGHT = 48;
const SPACING = 14;
export const TAB_BAR_WIDTH = TAB_BAR_ITEM_SIZE * TAB_ITEM_COUNT;
// export const TAB_BAR_WIDTH = width > 360 ? width - SPACING * 4 : width - SPACING * 2;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: CONTAINER_HEIGHT,
    borderRadius: CONTAINER_HEIGHT,
    // backgroundColor: COLORS.white,
    backgroundColor: '#b1b1b1',
    marginBottom: SPACING,
    width: TAB_BAR_WIDTH,
  },
});

export default CustomTabBar;
