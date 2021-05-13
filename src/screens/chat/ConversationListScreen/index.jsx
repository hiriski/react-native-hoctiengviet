import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {Button, Layout, Text} from '@ui-kitten/components';
import {MAIN_STACK} from '../../../config/navigator';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {resetFetchingMessage} from '../../../modules/conversation/actions';
import { useFocusEffect } from '@react-navigation/native';

const CONVERSATION_ID = 1;

const ChatListScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  /** Called every screen focused. */
  useFocusEffect(
    React.useCallback(() => {
      fetchMessageData();
      return () => {
        dispatch(resetFetchingMessage())
      };
    }, [conversationId]),
  );


  const handlePressBack = () => {
    let params = {conversationId : CONVERSATION_ID}
    navigation.navigate(MAIN_STACK.CHAT, params);
  };

  return (
    <ScrollView contentContainerStyle={StyleSheet.flatten([styles.root, { paddingTop: insets.top}])}>
      <Layout level="1" styles={styles.layout}>
        <Text category="h1">Chat list screen</Text>
        <Button onPress={handlePressBack}>Chat Details</Button>
      </Layout>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ChatListScreen;
