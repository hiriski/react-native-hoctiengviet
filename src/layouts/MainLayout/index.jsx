import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MainLayout = ({children}) => {
  return <View style={styles.root}>{children}</View>;
};

MainLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
