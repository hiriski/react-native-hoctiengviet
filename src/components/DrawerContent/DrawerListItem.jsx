/**
 * Custom Drawer List Item
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ROUTES} from '../../constants';
import DrawerItem from './DrawerItem';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/actions/authActions';

const navigations = [
  {
    label: 'Home',
    routeName: ROUTES.HOME,
    icon: 'layers',
  },
  {
    label: 'Profil',
    routeName: ROUTES.PROFILE,
    icon: 'person',
  },
  {
    label: 'Chillax',
    routeName: ROUTES.CHILLAX,
    icon: 'headphones',
  },
  {
    label: 'Chat',
    routeName: ROUTES.CHAT,
    icon: 'message-circle',
  },
  {
    label: 'Favorit',
    routeName: ROUTES.FAVORITE,
    icon: 'heart',
  },
  {
    label: 'Log Out',
    routeName: '__LOGOUT__',
    icon: 'log-out',
  },
  {
    label: 'Pengaturan',
    routeName: ROUTES.SETTINGS,
    icon: 'settings',
  },
];

const DrawerListItem = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePress = (routeName) => {
    if (routeName === '__LOGOUT__') {
      dispatch(logout());
    } else {
      navigation.navigate(routeName);
    }
  };

  return (
    <View style={styles.root}>
      {navigations.map(({label, routeName, icon}) => (
        <DrawerItem
          key={routeName}
          onPress={() => handlePress(routeName)}
          label={label}
          iconName={icon}
          routeName={routeName}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  },
});

export default DrawerListItem;
