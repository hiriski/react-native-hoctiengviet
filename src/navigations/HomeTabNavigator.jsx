import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MATERIAL_ICONS, ROUTES} from '../constants';
import HomeScreen from '../screens/HomeScreen';
import ChillaxScreen from '../screens/ChillaxScreen';
import SongScreen from '../screens/SongScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
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

  const renderTabBarIcons = ({routeName, color = '#555', size = 22}) => {
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
            <TouchableOpacity
              key={label}
              style={styles.focusedItem}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              {renderTabBarIcons({routeName: route.name, color: '#fff'})}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={label}
              style={styles.item}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              {renderTabBarIcons({routeName: route.name})}
              {/* <Text>{label}</Text> */}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 10,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusedItem: {
    backgroundColor: 'red',
    borderRadius: 46,
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusedText: {color: '#fff'},
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFocused: {
    color: '#673ab7',
  },
});

export default HomeTabNavigator;
