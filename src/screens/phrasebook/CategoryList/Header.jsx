import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Layout, Text, useTheme} from '@ui-kitten/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HeaderPhrasebookCategory = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <Layout style={StyleSheet.flatten([styles.container, { paddingTop: insets.top}])} level="1">
      <Icon name="book-open-outline" style={styles.icon}/>
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
  icon: {
    height: 30,
    width: 30
  }
});

export default HeaderPhrasebookCategory;
