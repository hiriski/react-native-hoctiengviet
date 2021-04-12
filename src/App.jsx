import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import GlobalFlashMessage from './components/FlashMessage';
import RootStackNavigator from './navigations/RootStackNavigator';

/* providers */
import OfflineProvider from './providers/OfflineProvider';
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
    <OfflineProvider>
      <UIKittenProvider>
        <SafeAreaContextProvider>
          <RootStackNavigator />
          <GlobalFlashMessage />
        </SafeAreaContextProvider>
      </UIKittenProvider>
    </OfflineProvider>
  );
};

export default XinChaoApp;
