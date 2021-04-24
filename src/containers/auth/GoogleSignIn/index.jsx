import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';
import GoogleIconSvg from '../../../assets/svg/google.svg';
import {useDispatch} from 'react-redux';

import {
  authWithSocialAccount,
  authWithSocialAccountCancelled,
  authWithSocialAccountFailure,
} from '../../../modules/auth/actions';
import GoogleSignInService from '../../../services/GoogleSignInService';

const GoogleIcon = () => <GoogleIconSvg width={20} height={20} />;

const GoogleSignIn = () => {
  const dispatch = useDispatch();
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

  return (
    <React.Fragment>
      <Button
        style={styles.loginGoogleButton}
        onPress={signInWithGoogle}
        appearance="outline"
        accessoryLeft={GoogleIcon}>
        Sign In with Google
      </Button>
      <Button onPress={getGoogleCurrentUser}>Get user info</Button>
      <Button onPress={signOutGoogleAccount}>Sign Out</Button>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  loginGoogleButton: {
    borderColor: '#eee',
  },
});

export default GoogleSignIn;
