import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import {Icon, useTheme} from '@ui-kitten/components';
import {TAB_BAR_ITEM_SIZE} from './index';
import {TAB, MAIN_STACK} from '../../config/navigator';
import {primary} from '../../components/config/colors';

const TabBarItem = ({
  route,
  isFocused,
  label,
  onPress,
  onLongPress,
  options,
}) => {
  const theme = useTheme();
  const renderTabBarIcon = ({routeName, fill, style}) => {
    let iconName;
    if (routeName === TAB.HOME) {
      iconName = 'layers';
    } else if (routeName === TAB.CHILLAX) {
      iconName = 'headphones';
    } else if (routeName === TAB.ADD) {
      iconName = 'plus-circle';
    } else if (routeName === MAIN_STACK.CONVERSATION) {
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
        underlayColor={theme['color-basic-300']}
        style={[styles.item, isFocused && styles.focusedItem]}
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        onPress={onPress}
        onLongPress={onLongPress}>
        {isFocused ? (
          <View style={[styles.itemContainer]}>
            {renderTabBarIcon({
              routeName: route.name,
              fill: primary,
              style: styles.focusedIcon,
            })}
            {/* <Text category="label" style={styles.focusedLabel}>
              {label}
            </Text> */}
          </View>
        ) : (
          <View style={styles.itemContainer}>
            {renderTabBarIcon({
              routeName: route.name,
              fill: theme['color-basic-600'],
              style: styles.icon,
            })}
          </View>
        )}
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  itemRoot: {
    borderRadius: TAB_BAR_ITEM_SIZE,
    overflow: 'hidden',
    flex: 1,
  },
  item: {
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
    color: primary,
  },
  label: {
    fontSize: 10,
  },
  focusedLabel: {
    color: primary,
    fontSize: 10,
  },
});

export default TabBarItem;
