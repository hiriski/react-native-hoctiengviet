import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Avatar, Text} from '@ui-kitten/components';
import {userAvatar, hasPhotoUrl, getInitialsUsername} from '../../utils/avatar';
import {primary} from '../config/colors';

const AvatarComponent = React.memo(({user, style, size, shape}) => {
  /** create avatar text. */
  const createTextAvatar = () => {
    return (
      <View style={styles.viewTextAvatar}>
        <Text style={styles.textAvatar} category="h1">
          {getInitialsUsername(user)}
        </Text>
      </View>
    );
  };

  const renderAvatar = () => (
    <Avatar
      shape={shape}
      style={StyleSheet.flatten([styles.avatar, style])}
      size={size}
      source={{uri: userAvatar(user)}}
    />
  );

  return (
    <React.Fragment>
      {hasPhotoUrl(user) ? renderAvatar() : createTextAvatar()}
    </React.Fragment>
  );
});

AvatarComponent.defaultProps = {
  size: 'medium',
  shape: 'round',
};

AvatarComponent.propTypes = {
  user: PropTypes.object,
};

const DEFAULT_AVATAR_SIZE = 40;
const styles = StyleSheet.create({
  avatar: {},
  viewTextAvatar: {
    backgroundColor: primary,
    height: DEFAULT_AVATAR_SIZE,
    width: DEFAULT_AVATAR_SIZE,
    borderRadius: DEFAULT_AVATAR_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAvatar: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'capitalize',
    lineHeight: 22,
    letterSpacing: 1,
  },
});

export default AvatarComponent;
