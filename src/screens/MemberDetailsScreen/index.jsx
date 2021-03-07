import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, Button} from 'react-native';
import {ROUTES} from '../../constants';
import MainLayout from '../../layouts/MainLayout';

const MemberDetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <Text>MemberDetailsScreen</Text>
      <Button
        onPress={() => navigation.navigate(ROUTES.CHAT)}
        title="Go to chat screen"
      />
    </MainLayout>
  );
};

export default MemberDetailsScreen;
