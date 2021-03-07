import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, Text} from 'react-native';
import {ROUTES} from '../../constants';
import MainLayout from '../../layouts/MainLayout';

const AboutScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <Text>AboutScreen</Text>
      <Button
        onPress={() => navigation.navigate(ROUTES.HOME)}
        title="Go to home screen"
      />
    </MainLayout>
  );
};

export default AboutScreen;
