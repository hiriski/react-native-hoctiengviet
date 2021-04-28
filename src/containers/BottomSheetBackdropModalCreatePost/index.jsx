import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, StyleSheet, Alert, Button, Text} from 'react-native';
import {BottomSheetModal, BottomSheetBackdrop} from '@gorhom/bottom-sheet';

const BackdropExample = () => {
  // state
  const [backdropPressBehavior, setBackdropPressBehavior] = useState(
    'collapse',
  );

  // refs
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  //#region callbacks
  const handleDismiss = useCallback(() => {
    Alert.alert('Modal Been Dismissed');
  }, []);

  const handlePresentPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

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
  //#endregion

  // renders
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop {...props} pressBehavior={backdropPressBehavior} />
    ),
    [backdropPressBehavior],
  );
  return (
    <React.Fragment>
      {/* <Button title="Present Modal" onPress={handlePresentPress} />
      <Button
        title={`Toggle Press Behavior: ${backdropPressBehavior}`}
        onPress={handleTogglePressBehavior}
      />
      <Button title="Expand" onPress={handleExpandPress} />
      <Button title="Collapse" onPress={handleCollapsePress} />
      <Button title="Close" onPress={handleClosePress} /> */}
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onDismiss={handleDismiss}
        backdropComponent={renderBackdrop}>
        <Text>Foo</Text>
      </BottomSheetModal>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default BackdropExample;
