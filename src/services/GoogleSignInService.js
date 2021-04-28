/**
 * Google Sign in service
 */
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

class GoogleSignInService {
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const googleAccount = await GoogleSignin.signIn();
      if (googleAccount !== null) {
        return googleAccount.user;
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        // console.log('Login dibatalkan');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Login on progress');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // console.log('Mohon update google play service');
        // play services not available or outdated
      } else {
        // some other error happened
        console.log('Error gak jelas ditangkap disini');
      }
      return null;
    }
  };

  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    return currentUser;
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      return true;
      // setUserInfo(null); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    setIsLoginScreenPresented(!isSignedIn);
  };
}

export default new GoogleSignInService();
