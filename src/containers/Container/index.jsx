import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {SPACING_BASE, SPACING_SMALL, SPACING_LARGE, SPACING_BIG} from '../../components/config/spacing';

const Container = ({style, spacing, children}) => {
  let _spacing = undefined;
  switch (spacing) {
    case "small":
      _spacing = SPACING_SMALL;
      break;
    case "medium":
      _spacing = SPACING_BASE;
      break;
    case "large":
      _spacing = SPACING_LARGE;
      break;
    default:
      _spacing = SPACING_SMALL;
  }
  return (
    <View style={StyleSheet.flatten([{
      paddingHorizontal: _spacing
    }, style])}>
      {children}
    </View>
  );
};

// Specifies the default values for props:
Container.defaultProps = {
  spacing: 'medium'
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    /* nothing to styled */
  },
});

export default Container;
