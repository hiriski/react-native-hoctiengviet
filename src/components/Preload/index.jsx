import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const Preload = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large" color="#ececec" />
      <Text>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default Preload;
