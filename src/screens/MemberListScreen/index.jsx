import React from 'react';
import {Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../constants';
import MainLayout from '../../layouts/MainLayout';

const MemberListScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <Text>MemberListScreen</Text>
      <Button
        onPress={() => navigation.navigate(ROUTES.MEMBER_DETAILS)}
        title="Go to member details screen "
      />
    </MainLayout>
  );
};

export default MemberListScreen;
