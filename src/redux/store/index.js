import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'remote-redux-devtools';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

import {persistStore, persistReducer} from 'redux-persist';

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',

  // Storage Method (React Native)
  storage: AsyncStorage,

  // Whitelist (Save Specific Reducers)
  // whitelist: ['app', 'auth'],
  // Blacklist (Don't Save Specific Reducers)
  // blacklist: ['counterReducer'],
};

const middlewares = [thunk];

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

// Middleware: Redux Persist Persister
export const persistor = persistStore(store);
