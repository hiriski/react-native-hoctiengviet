import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {CONVERSATION_STACK} from '../../../config/navigator';
import AvatarComponent from '../../../components/Avatar';
import Ripple from 'react-native-material-ripple';
import {SPACING_BASE} from '../../../components/config/spacing';

const ConversationItem = React.memo(({item}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const {user} = useSelector(state => state.auth);
  const {channel_id, conversation_type, participants, last_message} = item;

  // removed auth user.
  const filteredParticipants = participants.filter(
    participant => participant.id !== user.id,
  );

  const handleRipplePress = () => {
    let params = {conversationId: item.id};
    navigation.navigate(CONVERSATION_STACK.CHAT, params);
  };

  return (
    <Ripple
      rippleColor={theme['color-primary-500']}
      style={[styles.root, {borderBottomColor: theme['outline-color']}]}
      onPress={handleRipplePress}>
      <Layout style={styles.layoutUser} level="1">
        <AvatarComponent style={styles.avatar} user={filteredParticipants[0]} />
        <View style={styles.viewUserInfo}>
          <Text style={styles.textName} category="p1" numberOfLines={1}>
            usr name maybe
          </Text>
          <Text category="label" numberOfLines={1}>
            {/*Joined {timeAgo(user.created_at)}*/}
            {last_message.text}
          </Text>
        </View>
      </Layout>
    </Ripple>
  );
});

ConversationItem.propTypes = {
  conversation: PropTypes.object,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: SPACING_BASE / 2,
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    paddingVertical: SPACING_BASE,
  },
  layoutUser: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: SPACING_BASE,
  },
  avatar: {
    marginRight: SPACING_BASE,
  },
  viewUserInfo: {
    justifyContent: 'center',
  },
  textName: {
    fontSize: 17,
  },
});

export default ConversationItem;
