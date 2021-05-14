import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, StyleSheet} from 'react-native';
import {Icon, useTheme} from '@ui-kitten/components';
import {useSelector} from 'react-redux';

const IconButton = ({onPress, iconName, size, fill, style}) => {
  const uiTheme = useTheme();
  const {theme} = useSelector(state => state.common);
  return (
    <TouchableHighlight
      style={StyleSheet.flatten([styles.root, style])}
      onPress={onPress}
      underlayColor={theme === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0,0,0,0.065)' }>
      <Icon name={iconName} fill={fill ? fill : uiTheme['text-hint-color']} style={styles.icon} />
    </TouchableHighlight>
  );
};

const BUTTON_SIZE = 42;

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

IconButton.defaultProps = {
  size: 'medium',
};

IconButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  size: PropTypes.string,
  fill: PropTypes.string
};

export default IconButton;
