import React from 'react';
import PropTypes from 'prop-types';
import {BottomSheetModalProvider as Provider} from '@gorhom/bottom-sheet';

const BottomSheetModalProvider = ({children}) => {
  return <Provider>{children}</Provider>;
};

BottomSheetModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BottomSheetModalProvider;
