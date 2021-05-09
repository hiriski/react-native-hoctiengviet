/**
 * Get user avatar from response.
 * @param user
 * @returns {String}
 */
export const userAvatar = (user) => {
  return user.social_account
    ? user.social_account.social_photo_url
      ? user.social_account.social_photo_url
      : null
    : user.photo_url
    ? user.photo_url
    : null;
};

export const hasPhotoUrl = (user) => {
  if(userAvatar(user) !== null) {
    return true;
  }
  return false;
};
