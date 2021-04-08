import React from 'react';
import {View, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, ROUTES} from '../constants';
import HomeScreen from '../screens/HomeScreen';
import ChillaxScreen from '../screens/ChillaxScreen';
import CreateDiscussionScreen from '../screens/CreateDiscussionScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Icon, Text} from '@ui-kitten/components';

const Tab = createBottomTabNavigator();

const HomeTabNavigatorV2 = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTES.CHILLAX} component={ChillaxScreen} />
      <Tab.Screen name={ROUTES.CREATE} component={CreateDiscussionScreen} />
      <Tab.Screen name={ROUTES.CHAT} component={ChatScreen} />
      <Tab.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const CustomTabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const renderTabBarItem = ({routeName, fill, style}) => {
    let iconName;
    if (routeName === ROUTES.HOME) {
      iconName = 'layers';
    } else if (routeName === ROUTES.CHILLAX) {
      iconName = 'headphones';
    } else if (routeName === ROUTES.CREATE) {
      iconName = 'plus-circle';
    } else if (routeName === ROUTES.CHAT) {
      iconName = 'message-circle';
    } else if (routeName === ROUTES.PROFILE) {
      iconName = 'person';
    } else {
      iconName = 'home';
    }
    return <Icon name={iconName} fill={fill} style={style} />;
  };

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
            <TouchableHighlight
              key={label}
              underlayColor={COLORS.primaryLight}
              style={[styles.item, isFocused && styles.focusedItem]}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}>
              {isFocused ? (
                <View style={styles.itemContainer}>
                  {renderTabBarItem({
                    routeName: route.name,
                    fill: COLORS.white,
                    style: styles.focusedIcon,
                  })}
                  <Text style={styles.label} category="label">
                    {route.name}
                  </Text>
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
          );
        })}
      </View>
    </View>
  );
};

const TAB_ITEM_SIZE = 40;
const CONTAINER_HEIGHT = 58;
const SPACING = 18;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: CONTAINER_HEIGHT,
    borderRadius: CONTAINER_HEIGHT,
    backgroundColor: COLORS.white,
    marginBottom: SPACING,
    width: Dimensions.get('window').width - SPACING * 2,
  },
  item: {
    borderRadius: TAB_ITEM_SIZE,
    height: TAB_ITEM_SIZE,
    width: TAB_ITEM_SIZE,
  },
  focusedItem: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14,
    width: 'auto',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    color: COLORS.white,
    marginLeft: 6,
    fontSize: 14,
  },
  icon: {
    width: 25,
    height: 25,
  },
  focusedIcon: {
    width: 18,
    height: 18,
  },
});

export default HomeTabNavigatorV2;
