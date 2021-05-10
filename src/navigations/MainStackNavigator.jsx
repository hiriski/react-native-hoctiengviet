
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MAIN_STACK} from '../config/navigator';
import PhrasebookCategoryListScreen from '../screens/phrasebook/CategoryList';
import PhrasebookListScreen from '../screens/phrasebook/PhrasebookList';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={MAIN_STACK.CATEGORY_LIST} component={PhrasebookCategoryListScreen}/>
      <Stack.Screen name={MAIN_STACK.ALL_PHRASEBOOK_LIST} component={PhrasebookListScreen}/>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
