import React from 'react';
import {StatusBar} from 'react-native';
import RootStackNavigator from './navigations/RootStackNavigator';
import GlobalFlashMessage from './components/FlashMessage';
import {useSelector} from 'react-redux';
import {clearAsyncStorage} from './utils';

const AppRouter = () => {
  const {theme} = useSelector((state) => state.common);
  const barStyle = theme === 'dark' ? 'light-content' : 'dark-content';
  return (
    <React.Fragment>
      <StatusBar
        translucent
        barStyle={barStyle}
        backgroundColor="transparent"
      />
      <RootStackNavigator />
      <GlobalFlashMessage />
    </React.Fragment>
  );
};

export default AppRouter;
