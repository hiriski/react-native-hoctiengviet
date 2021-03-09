import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {MATERIAL_ICONS} from '../../../constants';

const ScreenHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.back}>
        <TouchableHighlight
          underlayColor={'#ECECEC'}
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <MaterialIcons name={MATERIAL_ICONS.ARROW_BACK} size={20} />
        </TouchableHighlight>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

ScreenHeader.prototype = {
  title: PropTypes.string.isRequired,
};

export default ScreenHeader;
