import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootStackNavigator from './navigations/RootStackNavigator';

/* providers */
import SafeAreaContextProvider from './providers/SafeAreaContextProvider';
import UIKittenProvider from './providers/UIKittenProvider';

const XinChaoApp = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <UIKittenProvider>
      <SafeAreaContextProvider>
        <RootStackNavigator />
      </SafeAreaContextProvider>
    </UIKittenProvider>
  );
};

export default XinChaoApp;
