import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SectionHeader = ({title, onPressMore}) => {
  return (
    <View style={styles.root}>
      <Text>{title}</Text>
      <TouchableOpacity onPress={onPressMore}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
});

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onPressMore: PropTypes.func.isRequired,
};

export default SectionHeader;
