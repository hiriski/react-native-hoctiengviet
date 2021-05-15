import React from 'react';
import {useWindowDimensions, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import {grey9} from '../components/config/colors';
import {HOME_DRAWER} from '../config/navigator';
import PhrasebookCategoryListScreen from '../screens/phrasebook/CategoryList';
import DrawerComponent from '../containers/Drawer';
import HomeScreen from '../screens/home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  const {theme} = useSelector(state => state.common);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      edgeWidth={60}
      drawerStyle={[{backgroundColor: theme === "light" ? 'white' : grey9}, isLargeScreen ? null : {width: '70%'}]}
      drawerType="front"
      drawerContent={(props) => <DrawerComponent {...props} />}>
      <Drawer.Screen
        name={HOME_DRAWER.HOME}
        component={HomeScreen}
      />
      <Drawer.Screen
        name={HOME_DRAWER.PHRASEBOOK_CATEGORY_LIST}
        component={PhrasebookCategoryListScreen}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {},
  drawerStyle: {},
});

export default DrawerNavigator;
