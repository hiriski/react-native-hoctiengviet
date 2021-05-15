import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreen from '../screens/conversation/ChatDetailsScreen';
import ConversationListScreen from '../screens/conversation/ConversationListScreen';
import {CONVERSATION_STACK} from '../config/navigator';
import {useSelector} from 'react-redux';
import ChatLoginRequiredScreen from '../screens/conversation/ChatLoginRequiredScreen';
import NewConversationScreen from '../screens/conversation/NewConversation';

const Stack = createStackNavigator();

const ConversationStackNavigator = () => {
  const {user, token} = useSelector(state => state.auth);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!user && !token ? (
        <Stack.Screen
          name={CONVERSATION_STACK.CHAT_LOGIN_REQUIRED}
          component={ChatLoginRequiredScreen}
        />
      ) : (
        <React.Fragment>
          <Stack.Screen
            name={CONVERSATION_STACK.CONVERSATION_LIST}
            component={ConversationListScreen}
          />
          <Stack.Screen
            name={CONVERSATION_STACK.NEW_CONVERSATION}
            component={NewConversationScreen}
          />
          <Stack.Screen name={CONVERSATION_STACK.CHAT} component={ChatScreen} />
        </React.Fragment>
      )}
    </Stack.Navigator>
  );
};

export default ConversationStackNavigator;
