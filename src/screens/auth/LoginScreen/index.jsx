import React from 'react';
import {StyleSheet, TouchableWithoutFeedback} from 'react-native';

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
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Layout style={styles.root}>
        <Text style={styles.title} category="h1">
          Login
        </Text>
        <Text style={styles.subtitle} category="h6">
          Belajar Bahasa Vietnam Bersama Komunitas.
        </Text>
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
        <GoogleSignIn />
      </Layout>
    </AuthLayout>
  );
};

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  title: {},
  subtitle: {
    marginBottom: MARGIN.BASE * 2,
  },
});

export default LoginScreen;
