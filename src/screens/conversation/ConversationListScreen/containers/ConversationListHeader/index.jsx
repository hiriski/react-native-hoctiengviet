import React from 'react';
import {View, Animated, StyleSheet, Dimensions} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import IconButton from '../../../../../components/partials/IconButton';
import {useNavigation} from '@react-navigation/native';
import {
  SPACING_BASE,
  SPACING_LARGE,
} from '../../../../../components/config/spacing';
import {primary} from '../../../../../components/config/colors';
import {isSmallScreen} from '../../../../../utils';

const BIG_HEADER_HEIGHT = 60;
const SMALL_HEADER_HEIGHT = 0;
const ConversationListHeader = ({animatedValue}) => {
  const navigation = useNavigation();

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, BIG_HEADER_HEIGHT],
    outputRange: [BIG_HEADER_HEIGHT, SMALL_HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  const handlePressBack = () => {
    navigation.goBack();
  };

  return (
    <Animated.View
      style={{
        height: headerHeight,
      }}>
      {/*<IconButton style={styles.iconButton} iconName="arrow-back" onPress={handlePressBack} />*/}
      <View style={styles.viewTitle}>
        <Text style={styles.textTitle} category="h1">
          Conversations.
        </Text>
      </View>
    </Animated.View>
  );
};

const TEXT_TITLE_BIG = isSmallScreen() ? 22 : 28;

const styles = StyleSheet.create({
  root: {
    height: BIG_HEADER_HEIGHT,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING_LARGE,
  },
  viewTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: TEXT_TITLE_BIG,
    marginTop: 10,
  },
  iconButton: {
    position: 'absolute',
    left: SPACING_BASE,
  },
});

export default ConversationListHeader;
