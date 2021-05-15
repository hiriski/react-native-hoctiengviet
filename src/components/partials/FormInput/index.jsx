import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {TextInput, StyleSheet} from 'react-native';
import {Input, useTheme} from '@ui-kitten/components';
import {grey7} from '../../config/colors';
import {MARGIN, PADDING} from '../../config/spacing';

const FormInput = ({
  placeholder,
  value,
  onChangeText,
  size = 'large',
  ...props
}) => {
  const theme = useTheme();

  const [borderBottomColor, setBorderBottomColor] = React.useState(
    theme['color-basic-400'],
  );

  const onFocus = () => {
    setBorderBottomColor('blue');
  };

  return (
    <TextInput
      size={size}
      onFocus={onFocus}
      placeholder={placeholder}
      style={StyleSheet.flatten([{borderBottomColor}, styles.input])}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: MARGIN.SMALL / 2,
    borderRadius: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    fontSize: 22,
    fontWeight: '600',
    color: grey7,
    paddingHorizontal: 0,
    paddingBottom: PADDING.SMALL,
  },
});

FormInput.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  size: PropTypes.string,
};

export default FormInput;
