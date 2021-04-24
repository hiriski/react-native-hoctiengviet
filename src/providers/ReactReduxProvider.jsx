import React from 'react';
import PropTypes from 'prop-types';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Preload from '../components/Preload';

import {store, persistor} from '../config-store';

const ReactReduxProvider = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Preload />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

ReactReduxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReactReduxProvider;
