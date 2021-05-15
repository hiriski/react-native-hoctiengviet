import React from 'react';

import {StyleSheet, FlatList, RefreshControl, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchPhrasebooks,
  resetFetchPhrasebooks,
} from '../../../modules/phrasebook/actions';
import {MARGIN, SPACING_BASE, SPACING_SMALL} from '../../../components/config/spacing';
import {Text} from '@ui-kitten/components';
import FloatingAddPhraseButton from '../../../containers/phrasebook/FloatingAddPhraseButton';
import CategoryCard from '../../../containers/phrasebook/CategoryCard';
import HeaderPhrasebookCategory from './Header';

const PhrasebookCategoryListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  const {list} = useSelector((state) => state.category);

  const fetchData = () => {
    dispatch(fetchPhrasebooks());
  };

  const handleRefresh = async () => {
    await fetchData();
    setRefreshing(false);
  };


  /**
   * Render item
   */
  const renderItem = ({item}) => <CategoryCard containerStyle={styles.cardContentContainerStyle} category={item}/>

  return (
    <React.Fragment>
      <HeaderPhrasebookCategory/>
      {
        list.length > 0 ? (
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
                title="Pull to refresh"
                tintColor="#fff"
                titleColor="red"
                colors={['red', 'green', 'blue']}
              />
            }
            horizontal={false}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            style={styles.container}
            data={list}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text>No Items</Text>
        )
      }
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  root: {
  },
  container: {
    paddingHorizontal: SPACING_BASE
  },

  // card
  cardContentContainerStyle: {
    margin: SPACING_BASE / 2
  }
});

export default PhrasebookCategoryListScreen;
