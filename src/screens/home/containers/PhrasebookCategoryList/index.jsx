import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Text, useTheme} from '@ui-kitten/components';
import {MARGIN} from '../../../../components/config/spacing';
import PhrasebookCategoryItemCard from '../../../../containers/phrasebook/PhrasebookCategoryItemCard';

const HomePhrasebookCategoryList = ({categories}) => {
  const theme = useTheme();

  console.log('HomePhrasebookCategoryList', categories);

  /**
   * Render item
   */
  const renderItem = ({item}) => <PhrasebookCategoryItemCard category={item} />;

  return (
    <View style={styles.root}>
      {categories.length > 0 ? (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.container}
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>No Item</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    marginTop: MARGIN.LARGE,
    paddingLeft: MARGIN.BASE,
  },
  container: {},
  textHeader: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default HomePhrasebookCategoryList;
