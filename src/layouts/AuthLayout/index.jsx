import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Layout} from '@ui-kitten/components';
import {PADDING} from '../../components/config/spacing';

const AuthLayout = ({children}) => {
  return (
    <SafeAreaView style={styles.root}>
      <Layout style={styles.layout}>{children}</Layout>
    </SafeAreaView>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  layout: {
    flex: 1,
    paddingHorizontal: PADDING.BIG,
    paddingBottom: PADDING.BIG,
  },
});

export default AuthLayout;
