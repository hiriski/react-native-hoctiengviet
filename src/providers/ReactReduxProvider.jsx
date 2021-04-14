import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';

import {store, persistor} from '../redux/store';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ActivityIndicator size="large" color="#ececec" />
    </View>
  );
};

const ReactReduxProvider = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

ReactReduxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReactReduxProvider;
