import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {BottomSheetModal, useBottomSheetModal} from '@gorhom/bottom-sheet';

const StackExample = () => {
  // hooks
  const {dismiss, dismissAll} = useBottomSheetModal();

  // refs
  const bottomSheetModalARef = useRef(null);
  const bottomSheetModalBRef = useRef(null);
  const bottomSheetModalCRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentAPress = useCallback(() => {
    if (bottomSheetModalARef.current) {
      bottomSheetModalARef.current.present();
    }
  }, []);
  const handleDismissAPress = useCallback(() => {
    if (bottomSheetModalARef.current) {
      bottomSheetModalARef.current.dismiss();
    }
  }, []);
  const handlePresentBPress = useCallback(() => {
    if (bottomSheetModalBRef.current) {
      bottomSheetModalBRef.current.present();
    }
  }, []);
  const handleDismissBPress = useCallback(() => {
    if (bottomSheetModalBRef.current) {
      bottomSheetModalBRef.current.dismiss();
    }
  }, []);
  const handlePresentCPress = useCallback(() => {
    if (bottomSheetModalCRef.current) {
      bottomSheetModalCRef.current.present();
    }
  }, []);
  const handleDismissCPress = useCallback(() => {
    if (bottomSheetModalCRef.current) {
      bottomSheetModalCRef.current.dismiss();
    }
  }, []);
  const handleDismissAllPress = useCallback(() => {
    dismissAll();
  }, [dismissAll]);
  const handleDismissByHookPress = useCallback(() => {
    dismiss('A');
  }, [dismiss]);

  // renders

  const renderBottomSheetContent = useCallback(
    (title, onPress) => (
      <View>
        <Text>Hello</Text>
      </View>
    ),
    [],
  );
  return (
    <React.Fragment>
      <Button title="Present Modal A" onPress={handlePresentAPress} />
      <Button title="Dismiss Modal A" onPress={handleDismissAPress} />
      <Button title="Present Modal B" onPress={handlePresentBPress} />
      <Button title="Dismiss Modal B" onPress={handleDismissBPress} />
      <Button title="Present Modal C" onPress={handlePresentCPress} />
      <Button title="Dismiss Modal C" onPress={handleDismissCPress} />

      <Button title="Dismiss All Modal" onPress={handleDismissAllPress} />

      <Button title="Dismiss A By Hook" onPress={handleDismissByHookPress} />

      <BottomSheetModal
        name="A"
        ref={bottomSheetModalARef}
        snapPoints={snapPoints}
        children={renderBottomSheetContent('Modal A', handlePresentBPress)}
      />

      <BottomSheetModal
        name="B"
        ref={bottomSheetModalBRef}
        snapPoints={snapPoints}
        children={renderBottomSheetContent('Modal B', handlePresentCPress)}
      />

      <BottomSheetModal
        name="C"
        ref={bottomSheetModalCRef}
        index={1}
        snapPoints={snapPoints}
        dismissOnPanDown={false}
        children={renderBottomSheetContent('Modal C', handleDismissCPress)}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default StackExample;
