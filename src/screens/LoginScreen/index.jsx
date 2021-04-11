import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

import FocusAwareStatusBar from '../../components/common/FocusAwareStatusBar';
import {Layout, Button, Text, Input, Icon} from '@ui-kitten/components';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

// svg
import GoogleIconSvg from '../../assets/svg/google.svg';
import AuthLayout from '../../layouts/AuthLayout';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = React.useState(null);
  const [isLoginScreenPresented, setIsLoginScreenPresented] = React.useState(
    null,
  );
  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const signInGoogle = async () => {
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

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <AuthLayout>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Layout style={styles.container}>
        <Text category="h1">Belajar Bahasa Vietnam Bersama Komunitas</Text>
        <Input placeholder="Username/email" value="" />
        <Input
          value={value}
          label="Password"
          placeholder="Place your Text"
          caption="Should contain at least 8 symbols"
          accessoryRight={renderIcon}
          captionIcon={AlertIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(nextValue) => setValue(nextValue)}
        />
        <Button
          style={styles.loginGoogleButton}
          onPress={signInGoogle}
          appearance="outline"
          accessoryLeft={GoogleIcon}>
          Sign In with Google
        </Button>
        <Button onPress={getCurrentUser}>Get user info</Button>
        <Button onPress={signOut}>Sign Out</Button>
      </Layout>
    </AuthLayout>
  );
};

const GoogleIcon = () => <GoogleIconSvg width={20} height={20} />;
const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginGoogleButton: {
    borderColor: '#eee',
  },
});

export default LoginScreen;
