import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {FlatList, StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';
import {MARGIN} from '../../../../components/config/spacing';
import CategoryCard from '../../../../containers/phrasebook/CategoryCard';
import SectionHeader from '../../../../containers/SectionHeader';
import Container from '../../../../containers/Container';
import {MAIN_STACK, ROOT_STACK} from '../../../../config/navigator';

const HomePhrasebookCategoryList = ({categories}) => {
  const navigation = useNavigation();

  /**
   * Render item
   */
  const renderItem = ({item}) => <CategoryCard containerStyle={styles.cardContentContainerStyle} category={item} />;

  const handlePressMoreButton = () => {
    navigation.navigate(ROOT_STACK.MAIN, {
      screen: MAIN_STACK.CATEGORY_LIST
    });
  };

  return (
    <View style={styles.root}>
      <Container>
        <SectionHeader uppercase={true} onPressMore={handlePressMoreButton} title={'Category'}/>
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

      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: MARGIN.LARGE,
  },
  container: {},
  textHeader: {
    fontSize: 20,
    textAlign: 'center',
  },

  // card
  cardContentContainerStyle: {
    width: 152,
    marginRight: MARGIN.SMALL
  }
});

export default HomePhrasebookCategoryList;
