import React from 'react';
import {ROUTES} from '../../constants';
import MainLayout from '../../layouts/MainLayout';
import {
  TopNavigation,
  TopNavigationAction,
  Icon,
  Button,
  Text,
} from '@ui-kitten/components';
import FocusAwareStatusBar from '../../components/common/FocusAwareStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';

const MemberListScreen = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <MainLayout>
      <SafeAreaView>
        <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
        <TopNavigation
          title="AWESOME MEMBER"
          alignment="center"
          accessoryLeft={BackAction}
        />
        <Text category="h1">MemberListScreen</Text>
        <Button onPress={() => navigation.navigate(ROUTES.MEMBER_DETAILS)}>
          Go to member details screen
        </Button>
      </SafeAreaView>
    </MainLayout>
  );
};

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export default MemberListScreen;
