import {Icon} from '@ui-kitten/components';
import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const FloatingAddPhraseButton = () => {
  return (
    <View styles={styles.root}>
      <TouchableHighlight>
        <Icon name="plus" style={styles.icon} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'red',
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default FloatingAddPhraseButton;
