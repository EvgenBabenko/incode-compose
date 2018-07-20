import getToken from './getToken';

export default () => {
  const isTokenExist = getToken();

  return isTokenExist
    ? {
      'x-access-token': `${isTokenExist}`,
    }
    : {};
};
