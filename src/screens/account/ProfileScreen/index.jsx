import React from 'react';
import {useNavigation} from '@react-navigation/core';

import FocusAwareStatusBar from '../../../components/common/FocusAwareStatusBar';
import {Button, Text, Divider} from '@ui-kitten/components';
import {useWindowDimensions, StyleSheet, Dimensions} from 'react-native';
import ProfileHeader from '../../../components/ProfileHeader';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  return (
    <>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      <ProfileHeader />
      <Text>HomeScreen</Text>
      <Button
        onPress={() =>
          navigation.navigate(ROUTES.MEMBER, {
            screen: ROUTES.MEMBER_LIST,
          })
        }>
        Go to member list screen
      </Button>
    </>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({});

export default ProfileScreen;
