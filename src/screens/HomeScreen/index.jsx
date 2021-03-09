import React from 'react';
import {Text, Button, StatusBar} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import FocusAwareStatusBar from '../../components/common/FocusAwareStatusBar';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <SafeAreaView style={styles.root}>
        <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Text>HomeScreen</Text>
        <Button
          onPress={() =>
            navigation.navigate(ROUTES.MEMBER, {
              screen: ROUTES.MEMBER_LIST,
            })
          }
          title="Go to member list screen"
        />
      </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;
