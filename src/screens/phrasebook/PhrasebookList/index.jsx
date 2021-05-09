import React from 'react';

import {StyleSheet, FlatList, RefreshControl, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchPhrasebooks,
  resetFetchPhrasebooks,
} from '../../../modules/phrasebook/actions';
import MainLayout from '../../../layouts/MainLayout';
import PhraseItem from '../../../containers/phrasebook/PhraseItem';
import {MARGIN} from '../../../components/config/spacing';
import {Text, useTheme} from '@ui-kitten/components';
import FocusAwareStatusBar from '../../../components/common/FocusAwareStatusBar';
import FloatingAddPhraseButton from '../../../containers/phrasebook/FloatingAddPhraseButton';

const PhrasebookListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const theme = useTheme();

  const {list} = useSelector((state) => state.phrasebook);

  const fetchData = () => {
    dispatch(fetchPhrasebooks());
  };

  React.useEffect(() => {
    fetchData();
    return () => {
      dispatch(resetFetchPhrasebooks());
    };
  }, [navigation]);

  const handleRefresh = () => {
    fetchData();
  };

  /**
   * Render item
   *
   */
  const renderItem = ({item}) => <PhraseItem item={item} />;

  return (
    <MainLayout>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader} category="h1">
          Phrasebooks
        </Text>
      </View>
      <View style={styles.root}>
        {list.length > 0 ? (
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
            showsVerticalScrollIndicator={false}
            style={styles.container}
            data={list}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text>No Items</Text>
        )}
      </View>
      <FloatingAddPhraseButton />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: MARGIN.LARGE,
  },
  container: {},

  viewHeader: {
    alignItems: 'center',
    marginTop: MARGIN.LARGE,
  },
  textHeader: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default PhrasebookListScreen;
