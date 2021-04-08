import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootStackNavigator from './navigations/RootStackNavigator';

/* providers */
import SafeAreaContextProvider from './providers/SafeAreaContextProvider';
import UIKittenProvider from './providers/UIKittenProvider';

import NotificationService from './services/NotificationService';

const XinChaoApp = () => {
  React.useEffect(() => {
    SplashScreen.hide();
    NotificationService.configure();
    NotificationService.createChannel();
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
