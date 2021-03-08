import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, Button} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import {ROUTES} from '../../constants';

const ChatScreen = () => {
  const navigation = useNavigation();
  return (
    <MainLayout>
      <Text>ChatScreen</Text>
      <Button
        onPress={() => navigation.navigate(ROUTES.HOME)}
        title="Go to homescreen"
      />
    </MainLayout>
  );
};

export default ChatScreen;
