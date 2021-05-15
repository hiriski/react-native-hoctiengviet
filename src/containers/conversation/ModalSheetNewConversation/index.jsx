import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Text, Input, useTheme} from '@ui-kitten/components';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import {
  SPACING_BASE,
  SPACING_LARGE,
  SPACING_SMALL,
} from '../../../components/config/spacing';
import {useDispatch, useSelector} from 'react-redux';
import {
  sendFirstMessage,
  unsetUserToStartChatting,
} from '../../../modules/conversation/actions';
import AvatarComponent from '../../../components/Avatar';
import {primary} from '../../../components/config/colors';
import {isSmallScreen} from '../../../utils';
import IconButton from '../../../components/partials/IconButton';

const DEFAULT_CHAT_INPUT = 'Xin Chào 👋';
const ModalSheetNewConversation = ({modalRef}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const {userToStartChatting} = useSelector(state => state.conversation);
  const {user: authUser} = useSelector(state => state.auth);
  const [chatInputValue, setInputChatValue] = React.useState(
    DEFAULT_CHAT_INPUT,
  );

  const snapPoints = React.useMemo(() => [0, 100], []);
  const [backdropPressBehavior, setBackdropPressBehavior] = React.useState(
    'close',
  );
  const handleSheetChanges = React.useCallback(index => {
    if (index === -1) {
      dispatch(unsetUserToStartChatting());
    }
  }, []);

  // Backdrop
  const renderBackdrop = React.useCallback(
    props => (
      <BottomSheetBackdrop
        opacity={0.5}
        {...props}
        pressBehavior={backdropPressBehavior}
      />
    ),
    [backdropPressBehavior],
  );

  const handleOnDismiss = () => {
    // alert("dismissed")
  };

  React.useEffect(() => {
    if (userToStartChatting !== null) {
      modalRef.current.present();
    }
  }, [userToStartChatting]);

  /**
   * Handle press button send.
   */
  const handlePressSend = () => {
    dispatch(sendFirstMessage(userToStartChatting.id, {text: chatInputValue}));
  };

  /**
   * Handle input changes.
   */
  const handleInputChange = val => {
    if (val.includes(DEFAULT_CHAT_INPUT)) {
      setInputChatValue(val);
    } else {
      // input cannot be empty string or not includes DEFAULT_CHAT_VALUE
      setInputChatValue(DEFAULT_CHAT_INPUT);
    }
  };

  // const handleTogglePressBehavior = React.useCallback(() => {
  //   setBackdropPressBehavior(state => {
  //     switch (state) {
  //       case 'none':
  //         return 'close';
  //       case 'close':
  //         return 'collapse';
  //       case 'collapse':
  //         return 'none';
  //     }
  //   });
  // }, []);

  const renderModalContent = () => (
    <Layout level="1" style={styles.modalBody}>
      <View style={styles.modalContent}>
        <View style={styles.avatarContainer}>
          <AvatarComponent
            style={[styles.avatarBordered, styles.avatarAuthUser]}
            size="giant"
            user={authUser}
          />
          <AvatarComponent
            style={[styles.avatarBordered, styles.avatarCollocutor]}
            size="giant"
            user={userToStartChatting}
          />
        </View>
        <Text style={styles.textTitle} category="h1">
          Let's Talk.
        </Text>
        <Text
          style={[styles.textChat, styles.textSubtitle]}
          appearance="hint"
          category="p1">
          {'Try saying  '}
          <Text
            style={[styles.textSubtitle, styles.textDefaultChat]}
            category="h1">
            "{chatInputValue}"
          </Text>{' '}
          {' to '}
          <Text
            style={[styles.textSubtitle, styles.textChatName]}
            category="h1">
            {userToStartChatting.name}
          </Text>
        </Text>
        {/*<Button style={styles.modalButton} onPress={() => alert("Button pressed")}>Start Chatting</Button>*/}
        {renderChatInput()}
      </View>
    </Layout>
  );

  const renderAccessoryRightChatInput = () => (
    <IconButton
      iconName="paper-plane"
      fill={theme['color-primary-500']}
      onPress={handlePressSend}
    />
  );

  const renderChatInput = () => {
    return (
      <View style={styles.viewChatInput}>
        <Input
          size="small"
          style={styles.inputChat}
          textStyle={styles.textInputChat}
          accessoryRight={renderAccessoryRightChatInput}
          placeholder={'Type message..'}
          value={chatInputValue}
          onChangeText={val => handleInputChange(val)}
        />
      </View>
    );
  };

  const backgroundComponent = () => (
    <Layout style={styles.modalBackground} level="1"></Layout>
  );

  return (
    <BottomSheetModal
      style={styles.root}
      // backgroundComponent={backgroundComponent}
      handleComponent={renderModalContent}
      animationDuration={250}
      dismissOnPanDown={true}
      onDismiss={handleOnDismiss}
      ref={modalRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}></BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: isSmallScreen() ? SPACING_LARGE * 2 : SPACING_LARGE * 3,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  modalContent: {
    width: isSmallScreen() ? '90%' : '77%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING_BASE,
  },
  avatarBordered: {
    borderWidth: 3,
    borderColor: 'white',
  },
  avatarAuthUser: {},
  avatarCollocutor: {
    marginLeft: -SPACING_BASE * 2,
  },
  textTitle: {
    fontSize: isSmallScreen() ? 20 : 26,
    marginBottom: SPACING_SMALL,
  },
  textSubtitle: {
    fontSize: isSmallScreen() ? 15 : 17,
  },
  textChat: {
    textAlign: 'center',
    marginBottom: SPACING_LARGE,
  },
  textDefaultChat: {
    color: primary,
  },
  textChatName: {},
  modalButton: {
    marginTop: SPACING_LARGE,
  },
  viewChatInput: {
    marginTop: SPACING_LARGE,
    width: '100%',
  },
  inputChat: {
    borderRadius: 50,
  },
  textInputChat: {
    fontSize: 15,
  },
  paperPlaneIcon: {
    height: 20,
    width: 20,
  },
});

export default ModalSheetNewConversation;
