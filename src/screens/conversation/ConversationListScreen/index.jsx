import React from 'react';
import {FlatList, Animated, StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {fetchConversationList} from '../../../modules/conversation/actions';
import {useFocusEffect} from '@react-navigation/native';
import ConversationItem from '../../../containers/conversation/ConversationItem';
import ConversationListHeader from './containers/ConversationListHeader';
import ConversationSearchBar from './containers/SearchBar';
import FloatingNewConversationButton from '../../../containers/conversation/FloatingNewConversationButton';
import NoConversation from './containers/NoConversation';
import {SPACING_LARGE} from '../../../components/config/spacing';

const ConversationListScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const offset = React.useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const {conversationList, isFetching} = useSelector(
    state => state.conversation,
  );

  const fetchData = () => {
    dispatch(fetchConversationList());
  };

  /** Called every screen focused. */
  useFocusEffect(
    React.useCallback(() => {
      fetchData();
      return () => {
        // console.log('cleaning up here.')
      };
    }, []),
  );

  /**
   * render conversation item.
   */
  const renderItem = ({item}) => <ConversationItem item={item} />;

  return (
    <Layout style={StyleSheet.flatten([styles.root, {paddingTop: insets.top}])}>
      {conversationList.length > 0 ? (
        // if there is conversations.
        <React.Fragment>
          <ConversationListHeader animatedValue={offset} />
          <ConversationSearchBar />
          <FlatList
            data={conversationList}
            style={styles.flatListRoot}
            showsVerticalScrollIndicator={true}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: offset}}}],
              {useNativeDriver: false},
            )}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
          <FloatingNewConversationButton />
        </React.Fragment>
      ) : (
        // otherwise render new conversation screen.
        <NoConversation />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListRoot: {
    flex: 1,
    marginTop: SPACING_LARGE
  },
});

export default ConversationListScreen;
