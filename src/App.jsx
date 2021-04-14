import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import GlobalFlashMessage from './components/FlashMessage';
import RootStackNavigator from './navigations/RootStackNavigator';

/* providers */
import OfflineProvider from './providers/OfflineProvider';
import ReactReduxProvider from './providers/ReactReduxProvider';
import SafeAreaContextProvider from './providers/SafeAreaContextProvider';
import UIKittenProvider from './providers/UIKittenProvider';

import NotificationService from './services/NotificationService';
import {getAllAsyncStorage, clearAsyncStorage} from './utils';

const XinChaoApp = () => {
  React.useEffect(() => {
    SplashScreen.hide();
    NotificationService.configure();
    NotificationService.createChannel();
    getAllAsyncStorage();
    // clearAsyncStorage();
  }, []);

  return (
    <ReactReduxProvider>
      <OfflineProvider>
        <UIKittenProvider>
          <SafeAreaContextProvider>
            <RootStackNavigator />
            <GlobalFlashMessage />
          </SafeAreaContextProvider>
        </UIKittenProvider>
      </OfflineProvider>
    </ReactReduxProvider>
  );
};

export default XinChaoApp;
