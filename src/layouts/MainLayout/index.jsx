import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PADDING} from '../../components/config/spacing';
import {white} from '../../components/config/colors';
import {Layout} from '@ui-kitten/components';
import FocusAwareStatusBar from '../../components/common/FocusAwareStatusBar';

const MainLayout = ({children}) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={styles.root}
      contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
      showsVerticalScrollIndicator={false}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={white} />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </ScrollView>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingBottom: PADDING.LARGE * 2,
  },
});

export default MainLayout;
