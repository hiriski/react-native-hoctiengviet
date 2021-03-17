import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as customMapping} from '../../custom-mapping.json';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import PropTypes from 'prop-types';

const UIKittenProvider = ({children}) => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        customMapping={customMapping}
        theme={eva.light}>
        {children}
      </ApplicationProvider>
    </>
  );
};

UIKittenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UIKittenProvider;
