import types from '../types/commonTypes';

export const createNotifyMessage = message => ({ type: types.CREATE_NOTIFY_MESSAGE, message });

export const clearNotifyMessage = () => ({ type: types.CLEAR_NOTIFY_MESSAGE });
