import React from 'react';
import {Button, Text} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../constants';

import {SafeAreaView} from 'react-native-safe-area-context';

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
        <Text>OnBoardingScreen</Text>
        <Button
          onPress={() => navigation.navigate(ROUTES.HOME)}
          title="Go to home"
        />
      </SafeAreaView>
    </MainLayout>
  );
};

export default OnBoardingScreen;
