import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Layout, Text, Icon, useTheme} from '@ui-kitten/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ROOT_STACK} from '../../../config/navigator';
import {SPACING_BIG} from '../../../components/config/spacing';

const ChatLoginRequiredScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const navigateToLogin = () => {
    navigation.navigate(ROOT_STACK.AUTH);
  };

  return (
    <Layout style={StyleSheet.flatten([styles.root, {paddingTop: insets.top}])}>
      <Icon
        name="message-circle"
        style={styles.icon}
        fill={theme['text-hint-color']}
      />
      <Text style={styles.textTitle} category="h2">
        Please Login
      </Text>
      <Button onPress={navigateToLogin}>Login</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    marginBottom: SPACING_BIG,
  },
  icon: {
    width: 100,
    height: 100,
  },
});

export default ChatLoginRequiredScreen;
