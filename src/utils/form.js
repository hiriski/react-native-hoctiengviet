import {Platform} from 'react-native';

/**
 * Create form data.
 * @param image
 * @param body
 * @returns {FormData}
 */
export const createFormData = (image, body) => {
  const data = new FormData();

  data.append('image', {
    name: image.fileName,
    type: image.type,
    uri:
      Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
  });

  if (body) {
    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });
  }

  return data;
};
