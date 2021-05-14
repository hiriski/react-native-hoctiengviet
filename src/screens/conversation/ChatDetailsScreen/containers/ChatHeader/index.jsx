import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

const ChatHeader = () => {
  return (
    <Layout style={styles.root}>
      <Text>Chat Header</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatHeader;
