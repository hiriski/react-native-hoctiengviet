import React from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SPLASH_SCREEN_BACKGROUND_COLOR = '#FBFBFB'; /* it's should be same with <color name="default_background_light">#FBFBFB</color> in res/values/colors.xml */

/*
* It's should be same dimens values.
* <resources>
    <dimen name="splash_screen_logo">160dp</dimen>
    <dimen name="splash_screen_spacer">60dp</dimen>
    <dimen name="splash_screen_text">24sp</dimen>
  </resources>
* */
const SPLASH_SCREEN_LOGO_SIZE = 160;
const SPLASH_SCREEN_SPACER = 60;
// const SPLASH_SCREEN_TEXT_SIZE = 24;
import {primary} from '../../components/config/colors';

const PersistLoading = () => {
  return (
      <React.Fragment>
        <StatusBar barStyle="dark-content"  backgroundColor={SPLASH_SCREEN_BACKGROUND_COLOR} />
          <SafeAreaView style={styles.root}>
          <View style={styles.viewLogo}>
            <Image
              style={styles.imageLogo}
              resizeMode="contain"
              source={require('../../assets/images/logo-primary.png')}
            />
          </View>
          <View style={styles.viewIndicator}>
            <ActivityIndicator size="small" color={primary} />
          </View>
        </SafeAreaView>
      </React.Fragment>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: SPLASH_SCREEN_BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewLogo: {
    // flex: 1,
  },
  imageLogo: {
    height: SPLASH_SCREEN_LOGO_SIZE,
    width: SPLASH_SCREEN_LOGO_SIZE,
  },
  viewIndicator: {
    height: SPLASH_SCREEN_SPACER,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -SPLASH_SCREEN_SPACER
  },
});

export default PersistLoading;
