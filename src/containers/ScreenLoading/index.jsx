import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {primary} from '../../components/config/colors';

const ScreenLoading = ({}) => {
  return (
    <View style={styles.root}>
      <ActivityIndicator
        style={styles.loading}
        size="large"
        color={primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: 'rgba(255,255,255,255)',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenLoading;
