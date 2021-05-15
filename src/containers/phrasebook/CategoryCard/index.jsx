import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableNativeFeedback, StyleSheet} from 'react-native';
import {MARGIN, PADDING} from '../../../components/config/spacing';
import {Text, Icon, Layout, useTheme} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import {MAIN_STACK, ROOT_STACK} from '../../../config/navigator';

const CategoryCard = ({category, containerStyle}) => {
  const theme = useTheme();
  const {id, text, color} = category;

  const categoryColor = color ? color.value : theme['color-basic-700'];
  const navigation = useNavigation();

  const handlePress =() => {
    let params = { categoryId: id};
    navigation.navigate(ROOT_STACK.MAIN, {
      screen: MAIN_STACK.PHRASEBOOK_LIST,
      params
    });
  }

  return (
    <Layout style={StyleSheet.flatten([styles.root, containerStyle, {borderColor: categoryColor}])} level="1">
      <TouchableNativeFeedback onPress={handlePress}>
          <View style={styles.container}>
            <Icon name="folder" style={styles.icon} fill={categoryColor} />
            <Text style={StyleSheet.flatten([styles.textTitle, {color: categoryColor}])} category="h2">{text.en}</Text>
            <Text appearance="hint" category="p2">{"50 Phrases"}</Text>
          </View>
      </TouchableNativeFeedback>
    </Layout>
  );
};


const CARD_HEIGHT = 112;
const styles = StyleSheet.create({
  root: {
    height: CARD_HEIGHT,
    borderRadius: 5,
    // borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: PADDING.BASE
  },
  icon: {
    height: 38,
    width: 38
  },
  textTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  }
});

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
  containerStyle: PropTypes.object
};

export default CategoryCard;
