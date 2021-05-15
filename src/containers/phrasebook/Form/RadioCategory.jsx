import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Radio, RadioGroup, Text } from '@ui-kitten/components';
import {useSelector} from 'react-redux';
import {SPACING_BASE} from '../../../components/config/spacing';

const RadioCategory = ({setCategoryId}) => {
  const { list } = useSelector(state => state.category);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    setCategoryId(selectedIndex + 1);
  }, [selectedIndex]);

  return (
    <React.Fragment>
      <View styles={styles.root}>
          <Text style={styles.textTitle} category='h5'>
            {`Selected Category ID: ${selectedIndex + 1}`}
          </Text>
          <ScrollView style={styles.scrollView} showsHorizontalScrollIndicator={false} horizontal={true}>
          <RadioGroup
            style={styles.radioGroup}
            selectedIndex={selectedIndex}
            onChange={index => setSelectedIndex(index)}>
              { list.map(({id, text}) => (
                <Radio key={id}>{text.en}</Radio>
              ))}
          </RadioGroup>
          </ScrollView>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginLeft: SPACING_BASE
  },
  textTitle: {
    marginLeft: SPACING_BASE
  },
  root: {
    height: 40,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default RadioCategory;
