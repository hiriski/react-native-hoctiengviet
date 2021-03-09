import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, Button} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import {ROUTES} from '../../constants';
import ScreenHeader from '../../components/partials/ScreenHeader';

const ChatScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <ScreenHeader title="CHATING" />
      <Text>ChatScreen</Text>
      <Button
        onPress={() => navigation.navigate(ROUTES.HOME)}
        title="Go to homescreen"
      />
    </MainLayout>
  );
};

export default ChatScreen;
