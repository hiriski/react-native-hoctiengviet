import React from 'react';

import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {Button, Text, useTheme} from '@ui-kitten/components';
import Container from '../../../../containers/Container';
import {PADDING} from '../../../../components/config/spacing';
import {secondary, white} from '../../../../components/config/colors';
import {MAIN_STACK} from '../../../../config/navigator';

const HomeBanner = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const theme = useTheme();

  const handlePress = () => {
    navigation.navigate(MAIN_STACK.CHAT);
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
    backgroundColor: secondary,
    borderRadius: 5
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
