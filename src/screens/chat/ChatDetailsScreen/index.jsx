import React from 'react';
import {StyleSheet } from 'react-native';
import {Layout} from '@ui-kitten/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import {TAB} from '../../../config/navigator';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMessages, resetFetchingMessage, sendMessage} from '../../../modules/chat/actions';
import ChatBody from './containers/ChatBody';
import ChatHeader from './containers/ChatHeader';

const ChatDetailsScreen = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {conversationId} = route.params;
  const { isSending, isError, messages } = useSelector(state => state.chat);
  // console.log(messages);

  const handlePressBack = () => {
    navigation.navigate(TAB.DRAWER);
  };

  const fetchMessageData = () => {
    dispatch(fetchMessages(conversationId));
  };

  const _sendMessage = (data) => {
    dispatch(sendMessage(conversationId, data))
  };

  /** Called every screen focused. */
  useFocusEffect(
    React.useCallback(() => {
      fetchMessageData();
      return () => {
        dispatch(resetFetchingMessage())
      };
    }, [conversationId]),
  );

  return (
    <Layout style={StyleSheet.flatten([styles.root, { paddingTop: insets.top}])}>
        <ChatHeader/>
        <ChatBody messages={messages} sendMessage={_sendMessage} fetchMessage={fetchMessageData} />
        {/*{ messages.length > 0 ? (*/}
        {/*) : null }*/}
    </Layout>
  )
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ChatDetailsScreen;
