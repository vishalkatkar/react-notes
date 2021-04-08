const namespace = "containers/notes";

export const SET_ADD_NOTE = `${namespace}/SET_ADD_NOTE`;
export const SET_UPDATE_NOTE = `${namespace}/SET_UPDATE_NOTE`;
export const SET_DELETE_NOTE = `${namespace}/SET_DELETE_NOTE`;

export const setAddNote = (payload) => ({
  type: SET_ADD_NOTE,
  payload,
});

export const setUpdateNote = (payload) => ({
  type: SET_UPDATE_NOTE,
  payload,
});

export const setDeletNote = (payload) => ({
  type: SET_DELETE_NOTE,
  payload,
});
