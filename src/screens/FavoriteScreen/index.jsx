import React from 'react';
import {Button, Text} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../constants';

const FavoriteScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <Text>FavoriteScreen</Text>
      <Button
        onPress={() => navigation.navigate(ROUTES.HOME)}
        title="Go to home screen"
      />
    </MainLayout>
  );
};

export default FavoriteScreen;
