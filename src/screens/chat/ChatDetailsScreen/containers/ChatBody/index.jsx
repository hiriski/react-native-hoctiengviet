import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import {
  GiftedChat,
  Send,
  InputToolbar,
} from 'react-native-gifted-chat';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from '@ui-kitten/components';
import {primary, primaryLight} from '../../../../../components/config/colors';
import {PADDING} from '../../../../../components/config/spacing';

const ChatBody = ({messages, fetchMessage, sendMessage}) => {
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log('==========RENDER CHAT BODY==========');

  const currentUser = {
    _id: user.id,
    name: user.name,
    avatar: user.social_account
      ? user.social_account.photo_url
        ? user.social_account.photo_url
        : null
      : user.photo_url
        ? user.photo_url
        : null,
  };

  /**
   * OnSend message
   */
  const handleMessageSend = (newMessages) => {
    sendMessage({
      text: newMessages[0].text || null,
    });
  };

  const handlePressCameraButton = () => {
    alert("Button was pressed")
  };

  /**
   * Actions on the left side
   */
  const renderActions = () => {
    return (
      <TouchableOpacity
        style={styles.chooseImageContainer}
        onPress={handlePressCameraButton}>
        <Icon name="camera" style={styles.iconCameraButton} />
      </TouchableOpacity>
    );
  };

  const renderLoadEarlier = () => (
    <View style={{width: 100, height: 100}}>
      <ActivityIndicator size="large" color={'red'} />
    </View>
  );

  const renderChatFooter = () => <View style={styles.chatFooter}></View>;

  const renderSend = (props) => {
    return (
      <Send {...props} containerStyle={styles.sendContainer}>
        <Icon name="navigation-2" style={styles.sendIcon} />
      </Send>
    );
  };

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        renderComposer={renderComposer}
        containerStyle={styles.toolbarContainer}
        primaryStyle={styles.toolbarPrimary}
        {...props}
      />
    );
  };

  const renderComposer = (props) => {
    return <TextInput text="foo" placeholder="foo" />;
  };

  return (
    <View style={styles.root}>
      <GiftedChat
        isLoadingEarlier={true}
        renderActions={renderActions}
        renderLoadEarlier={renderLoadEarlier}
        renderInputToolbar={renderInputToolbar}
        // renderComposer={renderComposer}
        alwaysShowSend={true}
        renderSend={renderSend}
        showUserAvatar={true}
        maxComposerHeight={100}
        messages={messages}
        renderChatFooter={renderChatFooter}
        onSend={(messages) => handleMessageSend(messages)}
        user={currentUser}
      />
    </View>
  );
};

const TOOLBAR_HEIGH = 52;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
  },
  chatFooter: {
    height: TOOLBAR_HEIGH,
  },
  sendContainer: {
    height: TOOLBAR_HEIGH - 10,
    width: TOOLBAR_HEIGH - 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryLight,
    borderRadius: TOOLBAR_HEIGH - 10,
  },
  chooseImageContainer: {
    height: TOOLBAR_HEIGH,
    width: TOOLBAR_HEIGH,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  sendIcon: {
    height: 20,
    width: 20,
    color: primary
  },
  buttonCamera: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCameraButton: {
    height: 20,
    width: 20,
  },
  toolbarPrimary: {
    // backgroundColor: '#eee',
  },
  toolbarContainer: {
    minHeight: TOOLBAR_HEIGH,
    borderRadius: 3,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: PADDING.SMALL
  },
});

export default ChatBody;
