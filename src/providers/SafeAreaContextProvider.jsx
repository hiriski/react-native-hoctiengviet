import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

const SafeAreaContextProvider = ({children}) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

SafeAreaContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SafeAreaContextProvider;
