import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const SectionHeader = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

SectionHeader.prototype = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
