import { createNotifyMessage, clearNotifyMessage } from '../store/actions/commonActions';

export default (typePrefix, fn, index) => async (dispatch) => {
  dispatch(clearNotifyMessage());
  dispatch({ type: `${typePrefix}_REQUEST` });

  try {
    const { data: { data, message } } = await fn();

    dispatch({ type: `${typePrefix}_SUCCESS`, data, index });

    dispatch(createNotifyMessage(message));
  } catch (error) {
    const { response: { data: { message } } } = error;

    dispatch(createNotifyMessage(message));
  }
};
