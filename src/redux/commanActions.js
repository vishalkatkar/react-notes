const namespace = "containers/app";

export const SET_ERROR = `${namespace}/SET_ADD_NOTE`;

export const setAppError = (payload) => ({
  type: SET_ERROR,
  payload,
});
