/**
 * Custom Drawer Header
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Text, Divider, Icon} from '@ui-kitten/components';
import {COLORS, ROUTES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import IconButton from '../../components/partials/IconButton';

const DrawerHeader = () => {
  const isLoggedIn = false;
  const navigation = useNavigation();

  const renderProfileInfo = () => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.touchableProfile}
      onPress={() => navigation.navigate(ROUTES.PROFILE)}>
      <View style={styles.avatar}>
        <Image
          source={require('../../assets/images/users/4yearsago.jpg')}
          style={styles.avatarImg}
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.name} category="h2">
          Riski
        </Text>
        <View style={styles.label}>
          <Icon
            name="award-outline"
            fill={COLORS.secondary}
            style={styles.labelIcon}
          />
          <Text style={styles.userLabel} category="label">
            Developer
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderGuestInfo = () => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.touchableProfile}
      onPress={() =>
        navigation.navigate(ROUTES.AUTH, {
          screen: ROUTES.LOGIN,
        })
      }>
      <View style={styles.avatar}>
        <View style={styles.avatarIconContainer}>
          <Icon name="person" style={styles.avatarIcon} fill={COLORS.primary} />
        </View>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.name} category="h2">
          Kamu Belum Login
        </Text>
        <View style={styles.label}>
          <Text style={styles.userLabel} category="label">
            Login untuk berdiskusi
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {isLoggedIn ? renderProfileInfo() : renderGuestInfo()}
        {isLoggedIn && (
          <IconButton
            iconName="edit-outline"
            onPress={() => alert('pressed')}
          />
        )}
      </View>
      <Divider />
    </View>
  );
};

const HEADER_HEIGHT = 80;
const AVATAR_SIZE = 46;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    paddingHorizontal: height > 640 ? 30 : 24,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  touchableProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    height: HEADER_HEIGHT,
    flex: 1,
  },
  avatar: {
    marginRight: 12,
  },
  avatarImg: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
  },
  avatarIconContainer: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarIcon: {
    height: AVATAR_SIZE / 1.5,
    width: AVATAR_SIZE / 1.5,
  },
  userInfo: {},
  name: {
    fontSize: 17,
    color: COLORS.textSecondary,
    fontWeight: '700',
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userLabel: {
    color: COLORS.textSecondary,
  },
  labelIcon: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
});

export default DrawerHeader;
