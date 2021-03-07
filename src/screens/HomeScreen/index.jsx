import React from 'react';
import {Text, Button} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../constants';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <Text>HomeScreen</Text>
      <Button
        onPress={() =>
          navigation.navigate(ROUTES.MEMBER, {
            screen: ROUTES.MEMBER_LIST,
          })
        }
        title="Go to member list screen"
      />
    </MainLayout>
  );
};

export default HomeScreen;
