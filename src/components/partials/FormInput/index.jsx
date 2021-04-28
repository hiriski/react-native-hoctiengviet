import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {Input} from '@ui-kitten/components';

const FormInput = ({
  placeholder,
  value,
  onChangeText,
  size = 'large',
  ...props
}) => {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      style={styles.root}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
    borderRadius: 5,
    lineHeight: 10,
  },
});

FormInput.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  size: PropTypes.string,
};

export default FormInput;
