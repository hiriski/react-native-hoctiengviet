import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet} from 'react-native';
import {Layout, withStyles} from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MainLayout = (props) => {
  const {eva, children} = props;
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.root}
      showsVerticalScrollIndicator={false}>
        <Layout style={StyleSheet.flatten([styles.container, { paddingTop: insets.top}])} level="2">
          {children}
        </Layout>
    </ScrollView>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default withStyles(MainLayout, (theme) => ({
  root: {
    backgroundColor: theme['color-basic-200'], // it's doesn't work.
  }
}));
