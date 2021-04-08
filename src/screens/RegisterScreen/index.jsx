import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import FocusAwareStatusBar from '../../components/common/FocusAwareStatusBar';
import {Button, Text} from '@ui-kitten/components';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <SafeAreaView style={styles.root}>
        <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Text>RegisterScreen</Text>
        <Button
          onPress={() =>
            navigation.navigate(ROUTES.AUTH, {
              screen: ROUTES.LOGIN,
            })
          }>
          Go to login
        </Button>
      </SafeAreaView>
    </MainLayout>
  );
};

export default RegisterScreen;
