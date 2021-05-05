import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {white} from '../../../components/config/colors';
import {Text} from '@ui-kitten/components';
import {MARGIN} from '../../../components/config/spacing';

const PhrasebookCategoryItemCard = ({category}) => {
  const {id, name} = category;
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text category="h5">{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 173,
    height: 150,
    backgroundColor: white,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 4,
    marginRight: MARGIN.BASE,
    marginBottom: MARGIN.BASE,
    borderRadius: 3,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

PhrasebookCategoryItemCard.propTypes = {
  category: PropTypes.object.isRequired,
};

export default PhrasebookCategoryItemCard;
