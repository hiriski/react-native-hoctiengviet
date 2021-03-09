import React from 'react';
import {Text} from 'react-native';
import ScreenHeader from '../../components/partials/ScreenHeader';
import MainLayout from '../../layouts/MainLayout';

const ProfileScreen = () => {
  return (
    <MainLayout>
      <ScreenHeader title="PROFILE" />
      <Text>ProfileScreen</Text>
    </MainLayout>
  );
};

export default ProfileScreen;
