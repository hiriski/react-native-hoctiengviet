import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import FocusAwareStatusBar from '../../components/common/FocusAwareStatusBar';
import {
  Button,
  Text,
  Divider,
  Layout,
  TopNavigation,
} from '@ui-kitten/components';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <SafeAreaView style={styles.root}>
        <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
        <TopNavigation title="HOME" alignment="center" />
        <Divider />
        <Text>HomeScreen</Text>
        <Button
          onPress={() =>
            navigation.navigate(ROUTES.MEMBER, {
              screen: ROUTES.MEMBER_LIST,
            })
          }>
          Go to member list screen
        </Button>
      </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;
