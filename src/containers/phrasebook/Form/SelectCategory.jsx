import React from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import {useSelector} from 'react-redux';

const SelectCategory = () => {
  const { list } = useSelector(state => state.category);
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  return (
    <Layout style={styles.container} level='1'>
      <Select
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title='Option 1'/>
        <SelectItem title='Option 2'/>
        <SelectItem title='Option 3'/>
      </Select>
    </Layout>
  );
};


const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
});

export default SelectCategory;
