import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableNativeFeedback, StyleSheet} from 'react-native';
import {primary, white} from '../../../components/config/colors';
import {MARGIN, PADDING} from '../../../components/config/spacing';
import {Text, Icon, Layout, useTheme} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { HOME_DRAWER } from '../../../config/navigator';

const PhrasebookCategoryItemCard = ({category}) => {
  const {id, name} = category;
  const theme = useTheme();
  const navigation = useNavigation();

  const handlePress =() => {
    navigation.navigate(HOME_DRAWER.PHRASEBOOK_LIST);
  }

  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <Layout style={styles.root} level="1">
        <View style={styles.container}>
          <Icon name="folder" style={styles.icon} fill={theme['color-primary-500']} />
          <Text status="primary" style={styles.textTitle} category="h2">{name}</Text>
          <Text appearance="hint" category="p2">{"50 Phrases"}</Text>
        </View>
      </Layout>
    </TouchableNativeFeedback>
  );
};


const CARD_HEIGHT = 122;
const styles = StyleSheet.create({
  root: {
    width: 173,
    height: CARD_HEIGHT,
    marginRight: MARGIN.BASE,
    marginBottom: MARGIN.BASE,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: primary,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 0.1,
    // shadowRadius: 1,
    // elevation: 4,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: PADDING.BASE
  },
  icon: {
    height: 44,
    width: 44
  },
  textTitle: {
    fontSize: 20
  }
});

PhrasebookCategoryItemCard.propTypes = {
  category: PropTypes.object.isRequired,
};

export default PhrasebookCategoryItemCard;
