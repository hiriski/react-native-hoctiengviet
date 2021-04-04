import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, ROUTES} from '../constants';
import HomeScreen from '../screens/HomeScreen';
import ChillaxScreen from '../screens/ChillaxScreen';
import CreateDiscussionScreen from '../screens/CreateDiscussionScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Icon} from '@ui-kitten/components';

const Tab = createBottomTabNavigator();

const HomeTabNavigatorV2 = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTES.CHILLAX} component={ChillaxScreen} />
      <Tab.Screen
        name={ROUTES.CREATE_DISCUSSION}
        component={CreateDiscussionScreen}
      />
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

  const renderTabBarItem = ({routeName, fill = COLORS.muted, style}) => {
    let iconName;
    if (routeName === ROUTES.HOME) {
      iconName = 'layers';
    } else if (routeName === ROUTES.CHILLAX) {
      iconName = 'headphones';
    } else if (routeName === ROUTES.CREATE_DISCUSSION) {
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
                    color: COLORS.white,
                    style: styles.iconFocus,
                  })}
                  <Text style={styles.label}>{route.name}</Text>
                </View>
              ) : (
                <View style={styles.itemContainer}>
                  {renderTabBarItem({
                    routeName: route.name,
                    color: COLORS.white,
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

const TAB_ITEM_SIZE = 42;
const CONTAINER_HEIGHT = 50;
console.log(Dimensions.get('window'));

const styles = StyleSheet.create({
  root: {
    height: CONTAINER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: CONTAINER_HEIGHT,
    borderRadius: CONTAINER_HEIGHT,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  // rootItem: {
  //   alignItems: 'center',
  //   flex: 1,
  // },
  item: {
    borderRadius: TAB_ITEM_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: COLORS.white,
    marginLeft: 4,
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 15,
  },
  focusedItem: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
  activeIcon: {
    width: 20,
    height: 20,
  },
});

export default HomeTabNavigatorV2;
