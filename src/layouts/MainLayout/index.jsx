import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { withStyles } from '@ui-kitten/components';

const MainLayout = (props) => {
  const {eva, children} = props;
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={eva.style.root}
      contentContainerStyle={styles.rootContentContainer}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
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
  rootContentContainer: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
  },
});

export default withStyles(MainLayout, (theme) => ({
  root: {
    backgroundColor: theme['color-basic-100'], // it's doesn't work.
  }
}));
