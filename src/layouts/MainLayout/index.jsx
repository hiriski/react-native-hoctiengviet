import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Layout} from '@ui-kitten/components';

const MainLayout = ({children}) => {
  return (
    <Layout level="2" style={styles.root}>
      {children}
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default MainLayout;
