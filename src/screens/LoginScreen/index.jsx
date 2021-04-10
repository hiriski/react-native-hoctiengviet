import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import FocusAwareStatusBar from '../../components/common/FocusAwareStatusBar';
import {Button, Text} from '@ui-kitten/components';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = React.useState(null);
  const [isLoginScreenPresented, setIsLoginScreenPresented] = React.useState(
    null,
  );

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('Login dibatalkan');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Login on progress');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Mohon update google play service');
        // play services not available or outdated
      } else {
        // some other error happened
        console.log('Error gak jelas ditangkap disini');
      }
    }
  };

  const getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    console.log(currentUser);
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUserInfo(null); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    setIsLoginScreenPresented(!isSignedIn);
  };

  console.log('USERINFO', userInfo);

  return (
    <MainLayout>
      <SafeAreaView style={styles.root}>
        <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Text>LoginScreen</Text>

        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
        <Button onPress={getCurrentUser}>Get user info</Button>
        <Button onPress={signOut}>Sign Out</Button>
      </SafeAreaView>
    </MainLayout>
  );
};

export default LoginScreen;
