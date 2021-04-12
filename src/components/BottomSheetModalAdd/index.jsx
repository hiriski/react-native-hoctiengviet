import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
// import ContactListContainer from '../../components/contactListContainer';
import {Button, Text} from '@ui-kitten/components';

const BackdropExample = () => {
  // state
  const [backdropPressBehavior, setBackdropPressBehavior] = useState(
    'collapse',
  );

  // hooks
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleTogglePressBehavior = useCallback(() => {
    setBackdropPressBehavior((state) => {
      switch (state) {
        case 'none':
          return 'close';
        case 'close':
          return 'collapse';
        case 'collapse':
          return 'none';
      }
    });
  }, []);
  const handleExpandPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const handleCollapsePress = useCallback(() => {
    bottomSheetRef.current?.collapse();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop {...props} pressBehavior={backdropPressBehavior} />
    ),
    [backdropPressBehavior],
  );
  return (
    <View style={styles.container}>
      <Button
        onPress={
          handleTogglePressBehavior
        }>{`Toggle Press Behavior: ${backdropPressBehavior}`}</Button>
      <Button onPress={handleExpandPress}>Expand</Button>
      <Button onPress={handleCollapsePress}>Collapse</Button>
      <Button onPress={handleClosePress}>Close</Button>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}>
        <Text>Hello World</Text>
        {/* <ContactListContainer type="View" count={4} title="Backdrop Example" /> */}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default BackdropExample;
