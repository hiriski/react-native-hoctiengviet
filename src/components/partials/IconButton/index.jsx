import React from 'react';
import {View, TouchableHighlight, StyleSheet} from 'react-native';
import {Icon} from '@ui-kitten/components';

const IconButton = ({onPress, iconName, fill = '#333'}) => {
  return (
    <TouchableHighlight
      style={styles.root}
      onPress={onPress}
      underlayColor="#ebebeb">
      <Icon name={iconName} fill={fill} style={styles.icon} />
    </TouchableHighlight>
  );
};

const BUTTON_SIZE = 36;
const styles = StyleSheet.create({
  root: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 22,
    height: 22,
  },
});

export default IconButton;
