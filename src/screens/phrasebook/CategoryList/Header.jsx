import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HeaderPhrasebookCategory = () => {
  const insets = useSafeAreaInsets();
  return (
    <Layout style={StyleSheet.flatten([styles.container, { paddingTop: insets.top}])} level="1">
      <Text>Category</Text>
    </Layout>
  )
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default HeaderPhrasebookCategory;
