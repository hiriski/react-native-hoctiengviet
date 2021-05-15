import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import Container from '../../../../containers/Container';
import {MARGIN} from '../../../../components/config/spacing';

const DailyQuotes = () => {
  return (
    <Container spacing="large" style={styles.root}>
      <Layout level='2'>
        <Text category="p1" style={styles.textSmall}>{"Keep Calm and"}</Text>
        <Text category="h1" style={styles.textBig}>{"Learn Vietnamese"}</Text>
      </Layout>
    </Container>
  )
}

const styles = StyleSheet.create({
  root: {
    marginVertical: MARGIN.BASE,
  },
  textSmall: {
    fontSize: 18,
  },
  textBig: {
    fontSize: 28,
  }
});

export default DailyQuotes;
