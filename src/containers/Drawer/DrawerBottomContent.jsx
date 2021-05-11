import React from 'react';
import DrawerItem from './DrawerItem';

const DrawerItemBottom = () => {
  const handlePress = () => {
    console.log('Pressed');
  };
  return (
    <DrawerItem label="Log Out" iconName="exit-to-app" onPress={handlePress} />
  );
};

export default DrawerItemBottom;
