import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {COLORS, ROUTES} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useIsConnected} from 'react-native-offline';
import {showMessage, hideMessage} from 'react-native-flash-message';

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
  useTheme,
} from '@ui-kitten/components';

const HomeScreen = ({navigation}) => {
  const isConnected = useIsConnected();
  const [isOffline, setIsOffline] = React.useState(!isConnected);
  const theme = useTheme();

  const [menuVisible, setMenuVisible] = React.useState(false);

  React.useEffect(() => {
    if (isOffline) {
      showMessage({
        message: 'You are offline!',
        description: 'This is our second message',
        type: 'default',
        animationDuration: 350,
        autoHide: false,
        duration: 4000,
        hideStatusBar: false,
      });
    }
  }, []);

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
        <FocusAwareStatusBar
          barStyle="light-content"
          backgroundColor={COLORS.primary}
        />
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
        <Button
          onPress={() =>
            showMessage({
              message: 'Hello World',
              description: 'This is our second message',
              type: 'success',
            })
          }>
          Show success flash message
        </Button>
      </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;
