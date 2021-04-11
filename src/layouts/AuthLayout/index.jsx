import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Layout} from '@ui-kitten/components';

const AuthLayout = ({children}) => {
  return <Layout style={styles.root}>{children}</Layout>;
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default AuthLayout;
