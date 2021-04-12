import React from 'react';
import {NetworkProvider} from 'react-native-offline';
import PropTypes from 'prop-types';

const OfflineProvider = ({children}) => {
  const options = {};
  return <NetworkProvider {...options}>{children}</NetworkProvider>;
};

OfflineProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OfflineProvider;
