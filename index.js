/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
GoogleSignin.configure();

AppRegistry.registerComponent(appName, () => App);
