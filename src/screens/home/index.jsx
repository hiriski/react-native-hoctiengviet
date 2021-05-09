import React from 'react';
import {StyleSheet} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import {useTheme} from '@ui-kitten/components';

// containers
import HomeHeader from './containers/Header';
import HomeBanner from './containers/Banner';
import {fetchPhrasebookCategories} from '../../modules/category/actions';
import HomePhrasebookCategoryList from './containers/PhrasebookCategoryList';
import {useDispatch, useSelector} from 'react-redux';
import DailyQuotes from './containers/DailyQuotes';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {list: categories} = useSelector((state) => state.category);
  const {theme} = useSelector(state => state.common);

  React.useEffect(() => {
    dispatch(fetchPhrasebookCategories());
  }, []);

  return (
    <MainLayout>
      <HomeHeader />
      <DailyQuotes/>
      <HomeBanner />
      <HomePhrasebookCategoryList categories={categories} />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  root: {},
});

export default HomeScreen;
