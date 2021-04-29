import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

import {COLORS} from '../../constants';
import {Icon, Text, useTheme} from '@ui-kitten/components';
// import Ripple from 'react-native-material-ripple';
import {TAB_BAR_ITEM_SIZE} from './index';
import {TAB} from '../../config/navigator';

const TabBarItem = ({
  route,
  isFocused,
  label,
  onPress,
  onLongPress,
  options,
}) => {
  const theme = useTheme();
  const renderTabBarItem = ({routeName, fill, style}) => {
    let iconName;
    if (routeName === TAB.HOME) {
      iconName = 'layers';
    } else if (routeName === TAB.CHILLAX) {
      iconName = 'headphones';
    } else if (routeName === TAB.ADD) {
      iconName = 'plus-circle';
    } else if (routeName === TAB.CHAT) {
      iconName = 'message-circle';
    } else if (routeName === TAB.ACCOUNT) {
      iconName = 'person';
    } else {
      iconName = 'home';
    }
    return <Icon name={iconName} fill={fill} style={style} />;
  };
  return (
    <View style={[styles.itemRoot]}>
      <TouchableHighlight
        key={label}
        underlayColor={theme['color-basic-400']}
        // rippleColor={COLORS.primary}
        // rippleOpacity={0.8}
        // rippleSize={100}
        // rippleCentered={true}
        style={[styles.item, isFocused && styles.focusedItem]}
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        onPress={onPress}
        onLongPress={onLongPress}>
        {isFocused ? (
          <View style={[styles.itemContainer]}>
            {renderTabBarItem({
              routeName: route.name,
              fill: COLORS.primary,
              style: styles.focusedIcon,
            })}
            {/* <Text category="label" style={styles.focusedLable}>
              {label}
            </Text> */}
          </View>
        ) : (
          <View style={styles.itemContainer}>
            {renderTabBarItem({
              routeName: route.name,
              fill: COLORS.muted,
              style: styles.icon,
            })}
          </View>
        )}
      </TouchableHighlight>
    </View>
  );
};

const TAB_ITEM_SIZE = TAB_BAR_ITEM_SIZE;

const styles = StyleSheet.create({
  itemRoot: {
    borderRadius: TAB_ITEM_SIZE,
    overflow: 'hidden',
    flex: 1,
  },
  item: {
    borderRadius: TAB_ITEM_SIZE,
    flex: 1,
  },
  focusedItem: {},
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    width: 22,
    height: 22,
  },
  focusedIcon: {
    width: 22,
    height: 22,
    color: COLORS.primary,
  },
  label: {
    fontSize: 10,
  },
  focusedLable: {
    color: COLORS.primary,
    fontSize: 10,
  },
});

export default TabBarItem;
