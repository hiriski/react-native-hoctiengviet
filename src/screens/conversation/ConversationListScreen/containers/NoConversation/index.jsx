import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Layout, Text} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {CONVERSATION_STACK} from '../../../../../config/navigator';
import {SPACING_LARGE} from '../../../../../components/config/spacing';
import {isSmallScreen} from '../../../../../utils';
import {fetchUserList} from '../../../../../modules/user/actions';
import {useDispatch} from 'react-redux';

const NoConversation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleButtonPress = () => {
    navigation.navigate(CONVERSATION_STACK.NEW_CONVERSATION);
  };

  // Fetch users.
  React.useEffect(() => {
    dispatch(fetchUserList());
  }, []);

  return (
    <Layout style={styles.root} level="1">
      <View style={styles.container}>
        <Text style={styles.textTitle} category="h1">
          No Conversation
        </Text>
        <Button onPress={handleButtonPress}>Start new conversation</Button>
      </View>
      <View style={styles.spacerBottom} />
    </Layout>
  );
};

const SPACER_BOTTOM = isSmallScreen() ? 100 : 140;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textTitle: {
    marginBottom: SPACING_LARGE,
  },
  spacerBottom: {
    height: SPACER_BOTTOM,
  },
});

export default NoConversation;
