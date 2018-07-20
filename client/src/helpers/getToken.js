import store from '../store/store';
import config from '../config';

export default () => store.getState().user.tokenStorage.token
  || JSON.parse(localStorage.getItem(config.StorageKey));
