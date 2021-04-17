import React, {useState, useRef} from 'react';
import {FlatList, StyleSheet, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../constants';

import {Layout, Button, Text} from '@ui-kitten/components';
import FocusAwareStatusBar from '../../components/common/FocusAwareStatusBar';

import OnboardingItem from './OnbardingItem';
import slides from './data';

const OnboardingScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef(null);

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  console.log(currentIndex);

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 60}).current;

  return (
    <Layout style={styles.root}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        data={slides}
        renderItem={({item}) => <OnboardingItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        ref={slideRef}
        // viewabilityConfig={viewConfig}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreen;
