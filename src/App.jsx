import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootStackNavigator from './navigations/RootStackNavigator';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <RootStackNavigator />;
};

export default App;
