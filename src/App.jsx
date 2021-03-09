import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootStackNavigator from './navigations/RootStackNavigator';

/* providers */
import SafeAreaContextProvider from './providers/SafeAreaContextProvider';

const XinChaoApp = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaContextProvider>
      <RootStackNavigator />
    </SafeAreaContextProvider>
  );
};

export default XinChaoApp;
