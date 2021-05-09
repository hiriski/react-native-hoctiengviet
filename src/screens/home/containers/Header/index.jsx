import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { Icon, Layout, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {SPACING_SMALL} from '../../../../components/config/spacing';
import {useSelector} from 'react-redux';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back'/>
);

const EditIcon = (props) => (
  <Icon {...props} name='edit'/>
);

const MenuIcon = (props) => (
  <Icon {...props} name='more-vertical'/>
);

const InfoIcon = (props) => (
  <Icon {...props} name='info'/>
);

const LogoutIcon = (props) => (
  <Icon {...props} name='log-out'/>
);

const HomeHeader = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout style={styles.root} level='1'>
      <View style={styles.container}>
        <Image source={require('../../../../assets/images/logo.png')} style={styles.logo} />
      </View>
    </Layout>
  );
};


const LOGO_SIZE = 32;
const styles = StyleSheet.create({
  root: {
    paddingVertical: SPACING_SMALL
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: LOGO_SIZE,
    resizeMode: 'contain'
  }
});


export default HomeHeader;
