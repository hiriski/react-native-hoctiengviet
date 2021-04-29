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

const PhrasebookListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const theme = useTheme();

  const {list} = useSelector((state) => state.phrasebook);
  console.log(list);

  const fetchData = () => {
    dispatch(fetchPhrasebooks());
  };

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      fetchData();
    });
    return () => {
      dispatch(resetFetchPhrasebooks());
    };
  }, [navigation]);

  const handleRefresh = () => {
    fetchData();
  };

  /** Set refreshing to false when fetching is success */
  // React.useEffect(() => {
  //   if (isSuccess) {
  //     setRefreshing(false);
  //   }
  //   if (isFetching) {
  //     setRefreshing(true);
  //   }
  // }, [isSuccess]);

  /**
   * Render item
   *
   */
  const renderItem = ({item}) => <PhraseItem item={item} />;

  return (
    <MainLayout>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={theme['color-basic-200']}
      />
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
