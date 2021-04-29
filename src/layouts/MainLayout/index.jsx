import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Layout} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainLayout = ({children}) => {
  return (
    <SafeAreaView style={styles.root}>
      <Layout level="2" style={styles.layout}>
        {children}
      </Layout>
    </SafeAreaView>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  layout: {
    flex: 1,
  },
});

export default MainLayout;
