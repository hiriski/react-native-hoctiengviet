import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Avatar} from '@ui-kitten/components';
import {userAvatar} from '../../utils/avatar';

const AvatarComponent = React.memo(
  ({user, style, size, shape}) => {
    return (
      <Avatar
        shape={shape}
        style={StyleSheet.flatten([styles.avatar, style])}
        size={size}
        source={{uri: userAvatar(user)}}
      />
    );
  },
);

Avatar.defaultProps = {
  size: 'large',
  shape: 'round'
};
Avatar.propTypes = {
  user: PropTypes.object,
};

const DEFAULT_AVATAR_SIZE = 40;
const styles = StyleSheet.create({
  avatar: {
    // borderRadius: DEFAULT_AVATAR_SIZE,
  },

  avatarText: {},
});

export default AvatarComponent;
