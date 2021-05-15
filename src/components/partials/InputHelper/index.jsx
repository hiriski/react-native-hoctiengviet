import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';
import PropTypes from 'prop-types';
import {error, grey6} from '../../../components/config/colors';

const InputHelper = ({text, type}) => {
  return (
    <View>
      <Text
        category="label"
        style={StyleSheet.flatten([
          type === 'error' ? styles.textError : styles.textGrey,
          styles.text,
        ])}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
  textGrey: {
    color: grey6,
  },
  textError: {
    color: error,
  },
});

InputHelper.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default InputHelper;
