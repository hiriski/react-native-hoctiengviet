import React from 'react';
import {Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Avatar = ({user, style}) => {
  return (
    <Image
      style={StyleSheet.flatten([styles.avatar, style && style])}
      source={{
        uri: user.social_account
          ? user.social_account.social_photo_url
          : user.photo_url
          ? user.photo_url
          : 'null',
      }}
      resizeMode="cover"
    />
  );
};

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
};

const DEFAULT_AVATAR_SIZE = 40;
const styles = StyleSheet.create({
  avatar: {
    height: DEFAULT_AVATAR_SIZE,
    width: DEFAULT_AVATAR_SIZE,
    borderRadius: DEFAULT_AVATAR_SIZE,
  },
});

export default Avatar;
