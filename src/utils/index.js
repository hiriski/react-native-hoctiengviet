import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_TOKEN_KEY} from '../constants';

export const saveUserToken = async (userToken) => {
  try {
    const jsonUserTokenValue = JSON.stringify(userToken);
    await AsyncStorage.setItem(USER_TOKEN_KEY, jsonUserTokenValue);
    console.log('User token has been saved!');
  } catch (error) {
    console.log('Failed to save user token', error);
  }
};

export const removeUserToken = async () => {
  try {
    await AsyncStorage.removeItem(USER_TOKEN_KEY);
    console.log('Token user removed from storage.');
  } catch (error) {
    console.log('Failed to remove token user', error);
  }
};

export const getUserToken = async () => {
  try {
    let userToken = await AsyncStorage.getItem(USER_TOKEN_KEY);
    return userToken;
  } catch (error) {
    console.log('Failed to get user token', error);
  }
};

/** clear app data */
export const clearAsyncStorage = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keys);
    console.log('App data was cleared!');
  } catch (error) {
    console.error('Error clearing app data.');
  }
};

/**
 * Get all async storage data
 */
export const getAllAsyncStorage = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);
    console.log(items);
  } catch (error) {
    console.log(error, 'Failed to get all async storage data');
  }
};
