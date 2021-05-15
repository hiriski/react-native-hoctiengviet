import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Layout, Text, useTheme} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import AvatarComponent from '../../../components/Avatar';
import Ripple from 'react-native-material-ripple';
import {timeAgo} from '../../../utils/time';
import {SPACING_BASE, SPACING_SMALL} from '../../../components/config/spacing';
import {CONVERSATION_STACK} from '../../../config/navigator';
import {useDispatch} from 'react-redux';
import {setUserToStartChatting} from '../../../modules/conversation/actions';

const ConversationUserItem = React.memo(({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = item || null;
  const theme = useTheme();

  const handleRipplePress = () => {
    dispatch(setUserToStartChatting(user));
  };

  const handlePressAvatar = () => {
    alert('pressed');
  };

  return (
    <Ripple
      rippleColor={theme['color-primary-500']}
      style={[styles.root, {borderColor: theme['outline-color']}]}
      onPress={handleRipplePress}>
      <Layout style={styles.layoutUser} level="1">
        <TouchableOpacity activeOpacity={0} onPress={handlePressAvatar}>
          <AvatarComponent style={styles.avatar} user={user} />
        </TouchableOpacity>
        <View style={styles.viewUserInfo}>
          <Text style={styles.textName} category="p1" numberOfLines={1}>
            {user.name}
          </Text>
          <Text category="label" numberOfLines={1}>
            Joined {timeAgo(user.created_at)}
          </Text>
        </View>
      </Layout>
    </Ripple>
  );
});

ConversationUserItem.propTypes = {
  item: PropTypes.object,
};

const styles = StyleSheet.create({
  root: {
    height: 140,
    borderRadius: 5,
    overflow: 'hidden',
    flex: 1,
    borderWidth: 1,
    margin: SPACING_BASE / 2,
  },
  layoutUser: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    marginBottom: SPACING_BASE / 2,
  },
  viewUserInfo: {
    alignItems: 'center',
  },
  textName: {
    fontSize: 17,
  },
});

export default ConversationUserItem;
