import React from 'react';
import {View, Image, useWindowDimensions, StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';
const logoImg = require('../../assets/images/logo.png');

const OnbardingItem = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.root, {width}]}>
      <View style={styles.container}>
        <Image style={styles.logoImg} source={logoImg} />
        <View style={styles.textContent}>
          <Text category="h1">{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
      </View>
    </View>
  );
};

const LOGO_SIZE = 79;
const styles = StyleSheet.create({
  root: {
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
  logoImg: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    resizeMode: 'contain',
  },
  container: {
    paddingHorizontal: 40,
  },
  textContent: {},
  title: {
    fontWeight: '800',
    fontSize: 24,
  },
});

export default OnbardingItem;
