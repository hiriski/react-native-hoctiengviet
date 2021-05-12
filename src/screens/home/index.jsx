import React from 'react';
import {StyleSheet} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import {useTheme} from '@ui-kitten/components';
import FocusAwareStatusBar from '../../components/common/FocusAwareStatusBar';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPhrasebookCategories} from '../../modules/category/actions';

// containers
import HomeHeader from './containers/Header';
import HomeBanner from './containers/Banner';
import HomePhrasebookCategoryList from './containers/PhrasebookCategoryList';
import DailyQuotes from './containers/DailyQuotes';
import HomeLatestPhrases from './containers/LatestPhrases/LatestPhrases';


const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {list: categories} = useSelector((state) => state.category);
  const {theme} = useSelector(state => state.common);
  const barStyle = theme === 'dark' ? 'light-content' : 'dark-content';
  const uiTheme = useTheme();

  React.useEffect(() => {
    dispatch(fetchPhrasebookCategories());
  }, []);

  return (
    <MainLayout>
      <HomeHeader />
      <DailyQuotes/>
      <HomeBanner />
      <HomePhrasebookCategoryList categories={categories} />
      <HomeLatestPhrases categories={categories} />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  root: {},
});

export default HomeScreen;
