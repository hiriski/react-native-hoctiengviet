import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, compose} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import {persistStore, persistReducer} from 'redux-persist';

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',

  // Storage Method (React Native)
  storage: AsyncStorage,
};

const middlewares = [thunk];

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools({realtime: true})
    : compose;

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

// Middleware: Redux Persist Persister
export const persistor = persistStore(store);
