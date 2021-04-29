import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, StyleSheet} from 'react-native';
import {Input} from '@ui-kitten/components';

const FormInput = ({
  placeholder,
  value,
  onChangeText,
  size = 'large',
  ...props
}) => {
  return (
    <TextInput
      size={size}
      placeholder={placeholder}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    borderRadius: 5,
    lineHeight: 10,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
  },
});

FormInput.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  size: PropTypes.string,
};

export default FormInput;
