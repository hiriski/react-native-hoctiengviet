import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Button, ListItem} from '@ui-kitten/components';
import {MARGIN} from '../../../components/config/spacing';
const SampleButton = (props) => <Button size="tiny">Button</Button>;

const LeftContent = (props) => (
  <Avatar
    {...props}
    style={[styles.logo, {tintColor: null}]}
    source={require('../../../assets/images/logo.png')}
  />
);

const PhraseItem = React.memo(({item}) => {
  console.log(item);
  return (
    <ListItem
      style={styles.root}
      title={item.text.vi}
      description={item.text.id}
      accessoryLeft={LeftContent}
      accessoryRight={SampleButton}
    />
  );
});

const styles = StyleSheet.create({
  root: {
    marginBottom: MARGIN.SMALL,
  },
  logo: {
    width: 40,
    height: 40,
  },
});

export default PhraseItem;
