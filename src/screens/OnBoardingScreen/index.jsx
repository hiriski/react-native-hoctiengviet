import React from 'react';
// import {Button} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../constants';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Layout, Button, Text} from '@ui-kitten/components';
import FocusAwareStatusBar from '../../components/common/FocusAwareStatusBar';

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text category="h1">OnBoardingScreen</Text>
      <Button onPress={() => navigation.navigate(ROUTES.HOME)}>
        NAVIGATE TO HOME
      </Button>
    </Layout>
  );
};

export default OnBoardingScreen;
