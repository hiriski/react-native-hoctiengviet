import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PhrasebookListHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  root: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignContent: 'center',
  },
  titleText: {
    fontSize: 17,
    fontFamily: 'HKGrotesk-Bold',
  },
});
PhrasebookListHeader.prototype = {
  title: PropTypes.string.isRequired,
};

export default PhrasebookListHeader;
