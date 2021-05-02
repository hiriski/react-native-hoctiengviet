import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';

import {MARGIN} from '../../../components/config/spacing';

import AuthLayout from '../../../layouts/auth';
import GoogleSignIn from '../../../containers/auth/GoogleSignIn';
import ContainerLoginForm from '../../../containers/auth/LoginForm';
import {primary} from '../../../components/config/colors';
import {AUTH_STACK} from '../../../config/navigator';
import {Layout, Text, Icon, Button} from '@ui-kitten/components';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {resetLoginState} from '../../../modules/auth/actions';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {isError, isSuccess, errorMessage} = useSelector(
    (state) => state.auth.login,
  );

  const handleNavigateToRegisterScreen = () => {
    navigation.navigate(AUTH_STACK.REGISTER);
  };

  /** Show flash message */
  React.useEffect(() => {
    if (isError) {
      showMessage({
        message: errorMessage ? errorMessage : 'Login failed!',
        type: 'danger',
        description: '',
        animationDuration: 350,
        autoHide: true,
        duration: 2000,
        hideStatusBar: false,
        style: styles.flashMessage,
      });
      dispatch(resetLoginState());
    }
  }, [isError]);

  React.useEffect(() => {
    if (isSuccess) {
      // reset login state when user leave this screen.
      return () => {
        dispatch(resetLoginState());
      };
    }
  }, [isSuccess]);

  return (
    <AuthLayout>
      <Layout style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.textTitle} category="h1">
            Login
          </Text>
          <Text style={styles.textSubtitle} category="p1">
            Belajar Bahasa Vietnam Bersama Komunitas.
          </Text>
        </View>
        <View style={styles.viewInputContainer}>
          <ContainerLoginForm />
        </View>
        <View style={styles.socialAuth}>
          <View style={styles.socilaAuthContainer}>
            <Text style={styles.textSocialAuth} category="p1">
              Login menggunakan akun social media kamu
            </Text>
            <GoogleSignIn />
          </View>
        </View>

        <View style={styles.viewBottom}>
          <Text category="p1">Belum punya akun ?</Text>
          <Button
            appearance="ghost"
            size="medium"
            onPress={handleNavigateToRegisterScreen}>
            Daftar Disini
          </Button>
        </View>
      </Layout>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  header: {},
  textTitle: {
    fontWeight: '700',
    color: primary,
  },
  textSubtitle: {
    marginBottom: MARGIN.BASE * 2,
  },
  viewInputContainer: {
    width: '100%',
  },
  socialAuth: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: MARGIN.LARGE,
  },
  textSocialAuth: {
    marginBottom: MARGIN.BASE,
  },
  viewBottom: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: MARGIN.LARGE,
  },
  flashMessage: {
    margin: 20,
    borderRadius: 50,
  },
});

export default LoginScreen;
