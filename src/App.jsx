import React from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export default App;
