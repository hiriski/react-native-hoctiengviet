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
import {useDispatch} from 'react-redux';
import {
  authWithSocialAccount,
  authWithSocialAccountCancelled,
  authWithSocialAccountFailure,
} from '../../redux/actions/authActions';
import GoogleSignInService from '../../services/GoogleSignInService';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = React.useState(null);
  const [isLoginScreenPresented, setIsLoginScreenPresented] = React.useState(
    null,
  );
  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  /**
   * Sign In with Google
   */
  const signInWithGoogle = async () => {
    const googleAccount = await GoogleSignInService.signIn();
    const {id, name, email, photo} = googleAccount;
    dispatch(
      authWithSocialAccount({
        social_id: id,
        social_name: name,
        social_email: email,
        social_photo_url: photo,
        social_provider: 'google', // Always be to lowercase
      }),
    );
  };

  /**
   * Handle sign out
   */
  const signOutGoogleAccount = () => {
    GoogleSignInService.signOut();
  };

  /**
   * Get current user
   */
  const getGoogleCurrentUser = async () => {
    const googleAccount = await GoogleSignInService.getCurrentUser();
    console.log(googleAccount);
  };

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
          onPress={signInWithGoogle}
          appearance="outline"
          accessoryLeft={GoogleIcon}>
          Sign In with Google
        </Button>
        <Button onPress={getGoogleCurrentUser}>Get user info</Button>
        <Button onPress={signOutGoogleAccount}>Sign Out</Button>
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
