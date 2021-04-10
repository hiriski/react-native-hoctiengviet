import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {useNavigation} from '@react-navigation/core';
import {COLORS, ROUTES} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import FocusAwareStatusBar from '../../components/common/FocusAwareStatusBar';
import {
  Button,
  Text,
  Divider,
  OverflowMenu,
  MenuItem,
  TopNavigation,
  TopNavigationAction,
  Icon,
} from '@ui-kitten/components';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction icon={EditIcon} />
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={InfoIcon} title="About" />
        <MenuItem accessoryLeft={LogoutIcon} title="Logout" />
      </OverflowMenu>
    </React.Fragment>
  );

  const renderBackAction = () => <TopNavigationAction icon={BackIcon} />;

  const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

  const EditIcon = (props) => <Icon {...props} name="edit" />;

  const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

  const InfoIcon = (props) => <Icon {...props} name="info" />;

  const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

  return (
    <MainLayout>
      <SafeAreaView style={styles.root}>
        <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
        <TopNavigation
          accessoryLeft={renderBackAction}
          accessoryRight={renderRightActions}
          title="HomeScreen"
          alignment="center"
          style={{backgroundColor: COLORS.primary}}
        />
        <Divider />
        <Text>HomeScreen</Text>
        <Button
          onPress={() =>
            navigation.navigate(ROUTES.MEMBER, {
              screen: ROUTES.MEMBER_LIST,
            })
          }>
          Go to member list screen
        </Button>
      </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;
