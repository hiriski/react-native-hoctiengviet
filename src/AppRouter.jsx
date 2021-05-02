import React from 'react';
import {StatusBar} from 'react-native';
import RootStackNavigator from './navigations/RootStackNavigator';
import GlobalFlashMessage from './components/FlashMessage';
import {useSelector} from 'react-redux';
import {clearAsyncStorage} from './utils';
import {white} from './components/config/colors';

const AppRouter = () => {
  const {isLoggedOut} = useSelector((state) => state.auth);

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
