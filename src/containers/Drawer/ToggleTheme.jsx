import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {useDispatch} from 'react-redux';
import {toggleTheme} from '../../modules/common/actions';

const ToggleTheme = () => {
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(toggleTheme())
  }
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={handlePress}>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableToggle: {
    padding: 10,
  }
});

export default ToggleTheme;
