import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { Icon, Layout, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {SPACING_SMALL} from '../../../../components/config/spacing';
import {useSelector} from 'react-redux';
import { Avatar, Text } from '@ui-kitten/components';

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

  const renderGreeting = () => (
    <View style={styles.greeting}>
      <Text style={styles.textGreeting} category="label">Xin Chào</Text>
      <Text style={styles.textUserName} category="p1">{user.name}</Text>
    </View>
  )


  return (
    <Layout style={styles.root} level='1'>
      <View style={styles.container}>
        { user !== null && renderGreeting() }
        {/*<Image source={require('../../../../assets/images/logo.png')} style={styles.logo} />*/}
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
    justifyContent: 'center'
  },
  logo: {
    height: LOGO_SIZE,
    resizeMode: 'contain'
  },

  greeting: {
    alignItems: "center",
    justifyContent: 'center'
  },
  textGreeting: {},
  textUserName: {
    fontSize: 16,
  }
});


export default HomeHeader;
