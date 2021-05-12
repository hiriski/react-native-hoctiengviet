import React from 'react';
import SplashScreen from 'react-native-splash-screen';

/* providers */
import OfflineProvider from './providers/OfflineProvider';
import ReactReduxProvider from './providers/ReactReduxProvider';
import UIKittenProvider from './providers/UIKittenProvider';
import SafeAreaContextProvider from './providers/SafeAreaContextProvider';

// import NotificationService from './services/NotificationService';
import AppRouter from './AppRouter';
import {enableScreens} from 'react-native-screens';

enableScreens();

const XinChaoApp = () => {
  React.useEffect(() => {
    SplashScreen.hide();
    // NotificationService.configure();
    // NotificationService.createChannel();
  }, []);

  return (
    <ReactReduxProvider>
      <OfflineProvider>
        <UIKittenProvider>
          <SafeAreaContextProvider>
            <AppRouter />
          </SafeAreaContextProvider>
        </UIKittenProvider>
      </OfflineProvider>
    </ReactReduxProvider>
  );
};

export default XinChaoApp;
