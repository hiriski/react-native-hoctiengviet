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

const HomeScreen = ({navigation}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {list: categories} = useSelector((state) => state.category);

  React.useEffect(() => {
    dispatch(fetchPhrasebookCategories());
  }, []);

  return (
    <MainLayout>
      <HomeHeader />
      <HomeBanner />
      <HomePhrasebookCategoryList categories={categories} />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  root: {},
});

export default HomeScreen;
