import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Button, ListItem, Text} from '@ui-kitten/components';
import {MARGIN} from '../../../components/config/spacing';

const PhraseItem = React.memo(({item}) => {
  const handlePressDeleteButton = () => {
    alert('handlePressDeleteButton');
  };

  const DeleteButton = () => (
    <Button appearance="ghost" size="small" onPress={handlePressDeleteButton}>
      Delete
    </Button>
  );

  const LeftContent = (props) => (
    <Avatar
      shape="square"
      {...props}
      style={[styles.logo]}
      source={require('../../../assets/images/logo-primary.png')}
    />
  );

  const renderTextTiengViet = () => (
    <Text style={styles.textTiengViet} category="p1">
      {item.text.vi}
    </Text>
  );
  const renderTextBahasaIndonesia = () => (
    <Text category="p2">{item.text.id}</Text>
  );

  return (
    <ListItem
      style={styles.root}
      title={renderTextTiengViet}
      description={renderTextBahasaIndonesia}
      accessoryLeft={LeftContent}
      accessoryRight={DeleteButton}
    />
  );
});

const styles = StyleSheet.create({
  root: {
    marginBottom: MARGIN.SMALL,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: MARGIN.SMALL,
  },
  textTiengViet: {
    // fontWeight: '600',
  },
});

export default PhraseItem;
