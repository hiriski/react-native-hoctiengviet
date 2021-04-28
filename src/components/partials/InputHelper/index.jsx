import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';
import PropTypes from 'prop-types';

const InputHelper = ({text}) => {
  return (
    <View>
      <Text category="label" style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: 'red',
  },
});

InputHelper.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InputHelper;
