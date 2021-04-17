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
        // return ({id, name, email, photo} = googleAccount.user);

        // setUserInfo(googleAccount.user);
        // dispatch(authWithSocialAccount({
        //   social_id: googleAccount.id
        // }))
        /***
         * Post user info to the server
         * 
          scopes: (2) ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"]
          serverAuthCode: null
          idToken: null
          user:
          photo: "https://lh3.googleusercontent.com/a-/AOh14Gg0LHNn3Qt6hid-99f9kemL_L8ZNSf4u6pb0AbI"
          givenName: "Dev"
          familyName: "Plara"
          email: "devplara@gmail.com"
          name: "Dev Plara"
          id: "117981266143300387148"
         */
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        // console.log('Login dibatalkan');
        dispatch(authWithSocialAccountCancelled());
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Login on progress');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // console.log('Mohon update google play service');
        // play services not available or outdated
        dispatch(authWithSocialAccountFailure());
      } else {
        // some other error happened
        dispatch(authWithSocialAccountFailure());
        // console.log('Error gak jelas ditangkap disini');
      }
    }
  };

  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    console.log(currentUser);
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // setUserInfo(null); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    setIsLoginScreenPresented(!isSignedIn);
  };
}

export default new GoogleSignInService();
