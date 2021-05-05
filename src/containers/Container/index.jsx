import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import {PADDING} from '../../components/config/spacing';

const Container = ({disable, style, children, ...rest}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, style])} {...rest}>
      {children}
    </View>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING.BASE,
  },
});

export default Container;
