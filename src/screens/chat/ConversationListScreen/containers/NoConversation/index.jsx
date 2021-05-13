import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';
import {Button, Layout, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {CONVERSATION_STACK} from '../../../config/navigator';

const NoConversation = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    let params = { conversationId: item.id };
    navigation.navigate(CONVERSATION_STACK.CHAT, params);
  };

  return(
      <Layout style={styles.root} level="1">
        <Text category="h1">No Conversation</Text>
        <Button onPress={handleButtonPress()}>Start new conversation</Button>
      </Layout>
  );
};

NoConversation.propTypes = {
  conversation: PropTypes.object
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
});

export default NoConversation;
