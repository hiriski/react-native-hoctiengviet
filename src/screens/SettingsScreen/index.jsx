import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, Button} from 'react-native';
import {ROUTES} from '../../constants';
import MainLayout from '../../layouts/MainLayout';

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <Text>SettingScreen</Text>
      <Button
        onPress={() => navigation.navigate(ROUTES.HOME)}
        title="Go to home screen"
      />
    </MainLayout>
  );
};

export default SettingsScreen;
