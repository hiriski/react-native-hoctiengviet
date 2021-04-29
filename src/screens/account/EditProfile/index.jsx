import React from 'react';
import {StyleSheet} from 'react-native';
import MainLayout from '../../../layouts/MainLayout';
import {Text} from '@ui-kitten/components';

const EditProfileScreen = () => {
  return (
    <MainLayout>
      <Text category="h2">EditProfileScreen</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EditProfileScreen;
