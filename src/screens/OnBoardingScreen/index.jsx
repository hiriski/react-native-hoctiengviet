import React from 'react';
import {Button, Text} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../constants';

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <Text>OnBoardingScreen</Text>
      <Button
        onPress={() => navigation.navigate(ROUTES.HOME)}
        title="Go to home"
      />
    </MainLayout>
  );
};

export default OnBoardingScreen;
