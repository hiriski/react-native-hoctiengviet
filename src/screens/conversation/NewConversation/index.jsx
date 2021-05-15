import React from 'react';
import {View, StyleSheet, Animated, FlatList} from 'react-native';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {useDispatch, useSelector, batch} from 'react-redux';
import {fetchUserList} from '../../../modules/user/actions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SPACING_BASE, SPACING_LARGE} from '../../../components/config/spacing';
import ConversationUserItem from '../../../containers/conversation/ConversationUserItem';
import ModalSheetNewConversation from '../../../containers/conversation/ModalSheetNewConversation';
import ChatSvg from '../../../assets/svg/chat.svg';
import {isSmallScreen} from '../../../utils';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  resetSendFirstMessage,
  unsetUserToStartChatting,
} from '../../../modules/conversation/actions';
import {CONVERSATION_STACK} from '../../../config/navigator';

const SVG_SIZE = isSmallScreen() ? 45 : 55;

const NewConversationScreen = ({navigation}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const offset = React.useRef(new Animated.Value(0)).current;

  const modalRef = React.useRef(null);

  const handlePresentModalPress = React.useCallback(() => {
    modalRef.current.present();
  }, []);

  const {list: users} = useSelector(state => state.user);
  const {responseFirstMessage} = useSelector(state => state.conversation);

  React.useEffect(() => {
    if (!users.length > 0) {
      dispatch(fetchUserList());
    }
  }, []);

  React.useEffect(() => {
    return () => {
      /** Cleaning up */
        dispatch(unsetUserToStartChatting());
    };
  }, []);

  // Navigate user to the chat details when success send first message.
  React.useEffect(() => {
    if (responseFirstMessage !== null) {
      let params = {conversationId: responseFirstMessage.id};
      navigation.navigate(CONVERSATION_STACK.CHAT, params);

      // reset response state.
      batch(() => {
        dispatch(resetSendFirstMessage());
        // may there's another dispatch right new.
      });
    }
  }, [responseFirstMessage]);

  /**
   * render conversation item.
   */
  const renderItem = ({item}) => <ConversationUserItem item={item} />;

  return (
    <BottomSheetModalProvider>
      <Layout style={[styles.layout, {paddingTop: insets.top}]} level="1">
        <View style={styles.viewHeader}>
          <ChatSvg
            style={styles.svgHeader}
            height={SVG_SIZE}
            width={SVG_SIZE}
          />
          <Text
            style={[styles.textSmall, {color: theme['text-primary-color']}]}
            category="h1">
            {'Start Chatting'}
          </Text>
          <Text
            style={[styles.textBig, {color: theme['text-basic-color']}]}
            category="h1">
            {'with Xin Chào Members.'}
          </Text>
        </View>
        {users.length > 0 ? (
          <FlatList
            data={users}
            style={styles.flatListRoot}
            showsVerticalScrollIndicator={true}
            scrollEventThrottle={16}
            numColumns={2}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: offset}}}],
              {useNativeDriver: false},
            )}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        ) : (
          <Text>There is no users.</Text>
        )}
        {/*<Button onPress={handlePresentModalPress}>Press Me!</Button>*/}
        <ModalSheetNewConversation modalRef={modalRef} />
      </Layout>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  viewHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING_LARGE * 2,
  },
  svgHeader: {
    marginBottom: SPACING_BASE,
  },
  textSmall: {
    textTransform: 'uppercase',
    fontSize: 14,
  },
  textBig: {
    fontSize: 22,
    textAlign: 'center',
  },
  flatListRoot: {
    flex: 1,
    paddingHorizontal: SPACING_BASE,
  },
});

export default NewConversationScreen;
