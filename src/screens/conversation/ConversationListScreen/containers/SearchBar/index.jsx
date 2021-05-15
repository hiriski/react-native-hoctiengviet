import React from 'react';
import {View, Animated, StyleSheet, TextInput} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import IconButton from '../../../../../components/partials/IconButton';
import {useNavigation} from '@react-navigation/native';
import {
  SPACING_BASE,
  SPACING_LARGE,
} from '../../../../../components/config/spacing';
import {primary} from '../../../../../components/config/colors';
import {isSmallScreen} from '../../../../../utils';

const ConversationSearchBar = () => {
  const navigation = useNavigation();

  const handlePressBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value=""
          placeholder="Search conversation"
        />
      </View>
    </View>
  );
};

const TEXT_TITLE_BIG = isSmallScreen() ? 12 : 24;

const styles = StyleSheet.create({
  root: {
    height: 50,
  },
  viewInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#333',
  },
});

export default ConversationSearchBar;
