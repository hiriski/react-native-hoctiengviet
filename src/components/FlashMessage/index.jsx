/**
 * Global flash message component instance
 */
import React from 'react';
import FlashMessage from 'react-native-flash-message';

const GlobalFlashMessage = () => (
  <FlashMessage hideStatusBar={true} position="top" />
);

export default GlobalFlashMessage;
