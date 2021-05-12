import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, StyleSheet} from 'react-native';
import {Icon, useTheme} from '@ui-kitten/components';
import {grey6} from '../../config/colors';
import {useSelector} from 'react-redux';

const IconButton = ({onPress, iconName, size, fill, style}) => {
  const uiTheme = useTheme();
  const {theme} = useSelector(state => state.common);
  return (
    <TouchableHighlight
      style={StyleSheet.flatten([styles.root, style])}
      onPress={onPress}
      underlayColor={theme === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0,0,0,0.065)' }>
      <Icon name={iconName} fill={fill} style={styles.icon} />
    </TouchableHighlight>
  );
};

const BUTTON_SIZE = 44;

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
  fill: grey6,
};

IconButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  size: PropTypes.string,
  fill: PropTypes.string
};

export default IconButton;
