import React from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SPLASH_SCREEN_STATUSBAR_COLOR = '#EAEEF6';
const SPLASH_SCREEN_LOGO_SIZE = 150; // 150dp
const SPLASH_SCREEN_SPACER = 40;
const SPLASH_SCREEN_TEXT_SIZE = 24;
import {primary} from '../../components/config/colors';

const PersistLoading = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={SPLASH_SCREEN_STATUSBAR_COLOR}
      />
      <View style={styles.viewLogo}>
        <Image
          style={styles.imageLogo}
          resizeMode="contain"
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <View style={styles.viewBottom}>
        <ActivityIndicator size="large" color={primary} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: SPLASH_SCREEN_STATUSBAR_COLOR,
  },
  viewLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo: {
    height: SPLASH_SCREEN_LOGO_SIZE,
    width: SPLASH_SCREEN_LOGO_SIZE,
  },
  viewBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PersistLoading;
