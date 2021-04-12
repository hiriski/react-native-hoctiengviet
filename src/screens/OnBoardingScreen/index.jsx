import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../constants';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Layout, Button, Text} from '@ui-kitten/components';
import FocusAwareStatusBar from '../../components/common/FocusAwareStatusBar';

const OnBoardingScreen = ({navigation}) => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text category="h1">OnBoardingScreen</Text>
      <Button
        onPress={() =>
          navigation.navigate(ROUTES.TAB, {
            screen: ROUTES.HOME,
          })
        }>
        NAVIGATE TO HOME
      </Button>
    </Layout>
  );
};

export default OnBoardingScreen;
