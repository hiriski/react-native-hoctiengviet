import React from 'react';

import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {MARGIN} from '../../../../components/config/spacing';
import {white} from '../../../../components/config/colors';
import {Text, useTheme} from '@ui-kitten/components';

const HomeHeader = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <View style={styles.viewHeader}>
      <Text style={styles.textHeader} category="h1">
        Home
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewHeader: {
    alignItems: 'center',
    marginTop: MARGIN.LARGE,
    backgroundColor: white,
  },
  textHeader: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default HomeHeader;
