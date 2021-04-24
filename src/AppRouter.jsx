import React from 'react';
import {StatusBar} from 'react-native';
import RootStackNavigator from './navigations/RootStackNavigator';
import GlobalFlashMessage from './components/FlashMessage';

const AppRouter = () => {
  return (
    <React.Fragment>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <RootStackNavigator />
      <GlobalFlashMessage />
    </React.Fragment>
  );
};

export default AppRouter;
