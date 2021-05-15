import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Layout, useTheme} from '@ui-kitten/components';
import {MARGIN, SPACING_SMALL} from '../../../../components/config/spacing';
import {useSelector} from 'react-redux';
import { Text } from '@ui-kitten/components';
import IconButton from '../../../../components/partials/IconButton';
import Container from '../../../../containers/Container';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import AvatarComponent from '../../../../components/Avatar';
import {primary} from '../../../../components/config/colors';
import {AUTH_STACK, MAIN_STACK, ROOT_STACK} from '../../../../config/navigator';

const HomeHeader = () => {
  const { user } = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const theme = useTheme();

  const navigateToProfile = () => {
    navigation.navigate(MAIN_STACK.ACCOUNT);
  };

  const navigateToRegister = () => {
    navigation.navigate(ROOT_STACK.AUTH, {
      screen : AUTH_STACK.REGISTER
    });
  };

  const navigateToNotification = () => {
    navigation.navigate(MAIN_STACK.NOTIFICATION);
  };

  const renderGreeting = () => (
    <TouchableOpacity activeOpacity={0.75} onPress={navigateToProfile} style={styles.touchableGreeting}>
      <AvatarComponent style={styles.avatarImg} user={user} />
      <View style={styles.greetingViewRight}>
        <Text numberOfLines={1} style={styles.textGreeting} category="label">Xin Chào 👋</Text>
        <Text numberOfLines={1} style={styles.textUserName} category="h1">{user.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderLogo = () => (
    <Layout level="1"  style={styles.layoutLogoContainer}>
      <Image source={require('../../../../assets/images/logo-primary.png')} style={styles.logoImg} />
      <Text numberOfLines={1} style={styles.textLogo} category="h1">Xin Chào</Text>
    </Layout>
  );

  const renderBellButton = () => (
    <IconButton style={styles.iconButtonBell} iconName='bell-outline' onPress={navigateToNotification}/>
  );

  const renderLayersIcon = () => (
    <IconButton style={styles.iconButtonBell} iconName='layers-outline' onPress={() => alert("Pressed")}/>
  );

  const handlePressBurgerMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  };

  return (
    <Layout style={styles.root} level='1'>
      <Container style={styles.container}>
          <IconButton style={styles.iconButtonMenu} iconName='menu' onPress={handlePressBurgerMenu}/>

          {/* user is logged in 👇 */}
          { user !== null ? (
            <React.Fragment>
              <View style={StyleSheet.flatten([styles.divider, { backgroundColor: theme['outline-color']}])}/>
              {renderGreeting()}
            </React.Fragment>
          ) : renderLogo() }
          { user !== null ? renderBellButton() : renderLayersIcon() }
      </Container>
    </Layout>
  );
};


const AVATAR_SIZE = 36;
const HEADER_HEIGHT = 52;
const LOGO_SIZE = 20;
const styles = StyleSheet.create({
  root: {
    paddingVertical: SPACING_SMALL
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: HEADER_HEIGHT,
    flexDirection: 'row',
  },
  iconButtonMenu: {
    marginRight: MARGIN.SMALL
  },
  divider: {
    width: 1,
    height: 26,
    marginRight: MARGIN.LARGE
  },
  touchableGreeting: {
    alignItems: "center",
    flexDirection: 'row',
    flex: 1
  },
  avatarImg: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE
  },
  greetingViewRight: {
    marginLeft: MARGIN.BASE
  },
  textGreeting: {
    fontSize: 13,
  },
  textUserName: {
    fontSize: 16,
  },
  iconButtonBell: {},
  layoutLogoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: - MARGIN.SMALL
  },
  logoImg: {
    height: LOGO_SIZE,
    width: LOGO_SIZE,
  },
  textLogo: {
    fontSize: 17,
    marginLeft: MARGIN.BASE,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: primary
  }
});


export default HomeHeader;
