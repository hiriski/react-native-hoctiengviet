import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MATERIAL_ICONS, ROUTES} from '../constants';
import HomeScreen from '../screens/HomeScreen';
import ChillaxScreen from '../screens/ChillaxScreen';
import SongScreen from '../screens/SongScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const HomeTabNavigatorV2 = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTES.CHILLAX} component={ChillaxScreen} />
      <Tab.Screen name={ROUTES.SONG} component={SongScreen} />
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

  const renderTabBarItem = ({routeName, color = '#555', size = 22}) => {
    let iconName;
    if (routeName === ROUTES.HOME) {
      iconName = MATERIAL_ICONS.FOLDER;
    } else if (routeName === ROUTES.CHILLAX) {
      iconName = MATERIAL_ICONS.COFFE;
    } else if (routeName === ROUTES.SONG) {
      iconName = MATERIAL_ICONS.HEADSET;
    } else if (routeName === ROUTES.CHAT) {
      iconName = MATERIAL_ICONS.FORUM;
    } else if (routeName === ROUTES.PROFILE) {
      iconName = MATERIAL_ICONS.ACCOUNT_CIRCLE;
    } else {
      iconName = MATERIAL_ICONS.LAYERS;
    }
    return <MaterialIcons name={iconName} color={color} size={size} />;
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

          return isFocused ? (
            <View key={route.name} style={styles.rootItem}>
              <TouchableHighlight
                key={label}
                underlayColor="#ececec"
                style={[styles.item, styles.focusedItem]}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}>
                {renderTabBarItem({routeName: route.name, color: '#fff'})}
                {/* <Text>{route.name}</Text> */}
              </TouchableHighlight>
            </View>
          ) : (
            <View key={route.name} style={styles.rootItem}>
              <TouchableHighlight
                underlayColor="#ececec"
                key={label}
                style={[styles.item, styles.inactiveItem]}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}>
                {renderTabBarItem({routeName: route.name})}
                {/* <Text>{label}</Text> */}
              </TouchableHighlight>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const TAB_ITEM_SIZE = 42;
const CONTAINER_HEIGHT = 50;

const styles = StyleSheet.create({
  root: {
    // height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: CONTAINER_HEIGHT,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  rootItem: {
    alignItems: 'center',
    flex: 1,
  },
  item: {
    borderRadius: TAB_ITEM_SIZE,
    width: TAB_ITEM_SIZE,
    height: TAB_ITEM_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  focusedItem: {
    backgroundColor: 'red',
  },
  focusedText: {color: '#fff'},
  textFocused: {
    color: '#673ab7',
  },
});

export default HomeTabNavigatorV2;
