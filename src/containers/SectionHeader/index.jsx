import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon, Text} from '@ui-kitten/components';
import {MARGIN} from '../../components/config/spacing';

const SectionHeader = ({title, onPressMore, uppercase, style}) => {
  return (
    <View style={StyleSheet.flatten([styles.root, style])}>
      <Text style={StyleSheet.flatten([styles.textTitle, {textTransform: uppercase ? 'uppercase' : 'none'}])} category="h1">{title}</Text>
      <TouchableOpacity style={styles.touchable} onPress={onPressMore}>
        <Icon fill="#444" name="more-horizontal-outline" style={styles.touchableIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginBottom: MARGIN.SMALL,
  },
  textTitle: {
    fontSize: 16,
    flex: 1,
  },
  touchable: {},
  touchableIcon: {
    height: 24,
    width: 24
  }
});

SectionHeader.defaultProps = {
  uppercase: true
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onPressMore: PropTypes.func.isRequired,
  uppercase: PropTypes.bool,
  style: PropTypes.object,
};

export default SectionHeader;
