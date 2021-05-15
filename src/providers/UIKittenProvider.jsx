import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as customMapping} from '../../custom-mapping.json';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import { default as customTheme } from '../theme.json';

const UIKittenProvider = ({children}) => {
  const {theme} = useSelector(state => state.common);
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        customMapping={customMapping}
        theme={{...eva[theme], ...customTheme}}>
        {children}
      </ApplicationProvider>
    </React.Fragment>
  );
};

UIKittenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UIKittenProvider;
