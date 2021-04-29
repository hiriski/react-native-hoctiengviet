import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';

import FocusAwareStatusBar from '../../../components/common/FocusAwareStatusBar';
import {Layout, Text, Input, Icon} from '@ui-kitten/components';
import {MARGIN} from '../../../components/config/spacing';

// svg
import AuthLayout from '../../../layouts/AuthLayout';
import {useDispatch} from 'react-redux';
import GoogleSignIn from '../../../containers/auth/GoogleSignIn';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

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
      {/* <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" /> */}
      <ImageBackground
        style={styles.imageBackground}
        source={{
          uri: require('../../../assets/images/headers/ruben-daems-ksD-NZagHpE-unsplash-droped.jpg'),
        }}>
        <Layout style={styles.root}>
          <View style={styles.header}>
            <Text style={styles.title} category="h1">
              Login
            </Text>
            <Text style={styles.subtitle} category="h6">
              Belajar Bahasa Vietnam Bersama Komunitas.
            </Text>
          </View>
          <View style={styles.inputContainer}>
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
          </View>
          <View style={styles.socialAuth}>
            <View style={styles.socilaAuthContainer}>
              <Text style={styles.textSocialAuth} category="p1">
                Login menggunakan akun social media kamu
              </Text>
              <GoogleSignIn />
            </View>
          </View>
        </Layout>
      </ImageBackground>
    </AuthLayout>
  );
};

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // alignItems: 'flex-start',
    // justifyContent: 'flex-end',
  },
  imageBackground: {
    resizeMode: 'cover',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    // flex: 1,
  },
  title: {},
  subtitle: {
    marginBottom: MARGIN.BASE * 2,
  },
  inputContainer: {},
  socialAuth: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: MARGIN.LARGE,
  },
  textSocialAuth: {
    marginBottom: MARGIN.BASE,
  },
});

export default LoginScreen;
