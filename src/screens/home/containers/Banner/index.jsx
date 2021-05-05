import React from 'react';

import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {Button, Text, useTheme} from '@ui-kitten/components';
import Container from '../../../../containers/Container';
import {PADDING} from '../../../../components/config/spacing';
import {primary, white} from '../../../../components/config/colors';

const HomeBanner = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const handlePress = () => {
    alert('Pressed');
  };

  return (
    <Container>
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.text} category="h1">
            Share with friends.
          </Text>
          <Button onPress={handlePress}>Share</Button>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: primary,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 20,
    textAlign: 'center',
    padding: PADDING.LARGE,
  },
  text: {
    fontSize: 22,
    color: white,
    flex: 1,
  },
});

export default HomeBanner;
