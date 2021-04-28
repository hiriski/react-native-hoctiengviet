import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';
import GoogleIconSvg from '../../../assets/svg/google.svg';
import {useDispatch} from 'react-redux';

import {loginWithSocialAccount} from '../../../modules/auth/actions';
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
      loginWithSocialAccount({
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
        style={styles.button}
        onPress={signInWithGoogle}
        appearance="ghost"
        accessoryLeft={GoogleIcon}>
        Login dengan Google
      </Button>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: '#eee',
  },
});

export default GoogleSignIn;
