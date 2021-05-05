import React from 'react';

import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {Text, useTheme} from '@ui-kitten/components';
import Container from '../../../../containers/Container';
import {MARGIN} from '../../../../components/config/spacing';
import {primary} from '../../../../components/config/colors';

const AwesomeMemberList = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Container>
      <View style={styles.root}>
        <Text style={styles.textHeader} category="h1">
          AwesomeMemberList
        </Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: primary,
  },
  textHeader: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AwesomeMemberList;
