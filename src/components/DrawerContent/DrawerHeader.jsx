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
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.container}>
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
            <Text style={styles.name} category="h1">
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
        <IconButton iconName="edit-outline" onPress={() => alert('pressed')} />
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
  name: {
    fontSize: 18,
    color: COLORS.textSecondary,
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
