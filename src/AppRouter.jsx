import React from 'react';
import {StatusBar} from 'react-native';
import RootStackNavigator from './navigations/RootStackNavigator';
import GlobalFlashMessage from './components/FlashMessage';
import {useSelector} from 'react-redux';
import {useTheme} from '@ui-kitten/components';
import {clearAsyncStorage} from './utils';

const AppRouter = () => {
  const {theme} = useSelector(state => state.common);
  const uiTheme = useTheme();
  const barStyle = theme === 'dark' ? 'light-content' : 'dark-content';
  const backgroundColor =
    theme === 'dark'
      ? uiTheme['background-basic-color-1']
      : uiTheme['color-basic-100'];
  return (
    <React.Fragment>
      <StatusBar
        translucent
        barStyle={barStyle}
        backgroundColor={backgroundColor}
      />
      <RootStackNavigator />
      <GlobalFlashMessage />
    </React.Fragment>
  );
};

export default AppRouter;
