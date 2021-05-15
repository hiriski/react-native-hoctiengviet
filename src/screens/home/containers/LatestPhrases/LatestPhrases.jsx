import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {FlatList, StyleSheet, View} from 'react-native';
import {Text} from '@ui-kitten/components';
import {MARGIN, SPACING_BASE, SPACING_SMALL} from '../../../../components/config/spacing';
import CategoryCard from '../../../../containers/phrasebook/CategoryCard';
import SectionHeader from '../../../../containers/SectionHeader';
import Container from '../../../../containers/Container';
import {MAIN_STACK, ROOT_STACK} from '../../../../config/navigator';

const HomeLatestPhrases = ({categories}) => {
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
    <React.Fragment>
      <SectionHeader style={styles.sectionHeader} uppercase={true} onPressMore={handlePressMoreButton} title={'New Phrases'}/>
      <Container style={styles.container}>
        {categories.length > 0 ? (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.flatList}
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text>No Item</Text>
        )}
      </Container>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    paddingHorizontal: SPACING_BASE,
    marginTop: SPACING_BASE,
  },
  container: {
    paddingRight: 0,
    paddingLeft: SPACING_BASE,
  },
  // card
  cardContentContainerStyle: {
    width: 152,
    marginRight: MARGIN.SMALL
  }
});

export default HomeLatestPhrases;
