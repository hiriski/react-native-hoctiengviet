import React from 'react';
import {StatusBar} from 'react-native';
import RootStackNavigator from './navigations/RootStackNavigator';
import GlobalFlashMessage from './components/FlashMessage';
import {useSelector} from 'react-redux';
import {clearAsyncStorage} from './utils';

const AppRouter = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  React.useEffect(() => {
    // clearAsyncStorage();
  }, []);

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
