import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchMessages,
  resetFetchingMessage,
  sendMessage,
} from '../../../modules/conversation/actions';
import ChatBody from './containers/ChatBody';
import ChatHeader from './containers/ChatHeader';
import ScreenLoading from '../../../containers/ScreenLoading';

const ChatDetailsScreen = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {conversationId} = route.params || null;

  const {isSending, isFetching, isError, messages} = useSelector(
    state => state.conversation,
  );

  const fetchMessageData = () => {
    dispatch(fetchMessages(conversationId));
  };

  const handleSendMessage = data => {
    dispatch(sendMessage(conversationId, data));
  };

  /** Called every screen focused. */
  useFocusEffect(
    React.useCallback(() => {
      fetchMessageData();
      return () => {
        dispatch(resetFetchingMessage());
      };
    }, [conversationId]),
  );

  return (
    <Layout style={StyleSheet.flatten([styles.root, {paddingTop: insets.top}])}>
      <ChatHeader />
      {isFetching ? (
        <ScreenLoading />
      ) : (
        <ChatBody
          messages={messages['conversation_id_' + conversationId]}
          sendMessage={handleSendMessage}
          fetchMessage={fetchMessageData}
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatDetailsScreen;
