import config from '../config';

export default () => {
  const isKeyExist = JSON.parse(localStorage.getItem(config.StorageKey));

  return isKeyExist
    ? {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-access-token': isKeyExist.token,
      },
    }
    : {};
};
