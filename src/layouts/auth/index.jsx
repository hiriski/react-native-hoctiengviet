import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PADDING} from '../../components/config/spacing';
import {white} from '../../components/config/colors';
import {Layout} from '@ui-kitten/components';

const AuthLayout = ({children}) => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
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
  container: {
    flex: 1,
    paddingHorizontal: PADDING.LARGE * 2,
    paddingBottom: PADDING.LARGE * 2,
    backgroundColor: white,
  },
});

export default AuthLayout;
