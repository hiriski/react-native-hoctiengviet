import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {useNavigation} from '@react-navigation/core';
import {COLORS, ROUTES} from '../../constants';

import {
  ImageBackground,
  useWindowDimensions,
  StyleSheet,
  Dimensions,
} from 'react-native';

const ProfileHeader = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.headerImage}
      source={require('../../assets/images/headers/ruben-daems-ksD-NZagHpE-unsplash-droped.jpg')}
    />
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  headerImage: {
    width: width,
    height: 200,
  },
});

export default ProfileHeader;
