import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import Container from '../../../../containers/Container';
import {MARGIN} from '../../../../components/config/spacing';

const DailyQuotes = () => {
  return (
    <Container spacing="medium" style={styles.root}>
      <Layout level='1'>
        <Text category="p1" style={styles.textSmall}>{"Keep Calm and"}</Text>
        <Text category="h1" style={styles.textBig}>{"Learn Vietnamese"}</Text>
      </Layout>
    </Container>
  )
}

const styles = StyleSheet.create({
  root: {
    marginBottom: MARGIN.BASE
  },
  textSmall: {
    fontSize: 16,
  },
  textBig: {
    fontSize: 26,
  }
})

export default DailyQuotes;
