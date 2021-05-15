import React from 'react';
import {Animated, View, StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';
import {SPACING_BIG, SPACING_LARGE} from '../../../components/config/spacing';
import {isSmallScreen} from '../../../utils';

const FloatingNewConversationButton = () => {
  const handleButtonPress = () => {
    alert('Pressed');
  };

  const animatedScaleButton = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(animatedScaleButton, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [animatedScaleButton]);

  return (
    <View style={styles.root}>
      <Animated.View
        style={StyleSheet.flatten([
          styles.animatedViewButton,
          {
            transform: [{scale: animatedScaleButton}],
          },
        ])}>
        <Button style={styles.button} onPress={handleButtonPress}>
          New Conversation
        </Button>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: isSmallScreen() ? SPACING_LARGE : SPACING_BIG,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedViewButton: {
    flex: 1,
  },
  button: {
    borderRadius: 50,
    borderWidth: 0,
  },
});

export default FloatingNewConversationButton;
