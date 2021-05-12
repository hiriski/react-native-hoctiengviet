/**
 * Custom Drawer List Item
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import DrawerItem from './DrawerItem';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {revokeToken} from '../../modules/auth/actions';
import GoogleSignInService from '../../services/GoogleSignInService';
import {TAB, HOME_DRAWER, ROOT_STACK} from '../../config/navigator';

const navigations = [
  {
    label: 'Home',
    routeName: TAB.DRAWER,
    icon: 'layers',
  },
  {
    label: 'Profil',
    routeName: TAB.ACCOUNT,
    icon: 'person',
  },
  {
    label: 'Chillax',
    routeName: TAB.CHILLAX,
    icon: 'headphones',
  },
  {
    label: 'Chat',
    routeName: TAB.CHAT_LIST,
    icon: 'message-circle',
  },
  {
    label: 'Favorit',
    routeName: HOME_DRAWER.FAVORITE,
    icon: 'heart',
  },
  {
    label: 'Log Out',
    routeName: '__LOGOUT__',
    icon: 'log-out',
  },
  {
    label: 'Pengaturan',
    routeName: ROOT_STACK.SETTINGS,
    icon: 'settings',
  },
];

const DrawerListItem = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {socialProvider} = useSelector((state) => state.auth);

  const handlePress = (routeName) => {
    if (routeName === '__LOGOUT__') {
      dispatch(revokeToken());
      if (socialProvider === 'google') {
        GoogleSignInService.signOut();
      }
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
