import { SET_ADD_NOTE, SET_DELETE_NOTE, SET_UPDATE_NOTE } from "./actions";

const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_NOTE:
      const addedNotes = [...state.notes, action.payload];
      return { ...state, notes: addedNotes || [] };
    case SET_UPDATE_NOTE:
      const { id, title, body } = action.payload;
      const updateNotes = state.notes;
      const updateIndex = updateNotes.findIndex((note) => note.id === id);
      updateNotes[updateIndex].title = title;
      updateNotes[updateIndex].body = body;
      return { ...state, notes: updateNotes || [] };
    case SET_DELETE_NOTE:
      const deletedNotes = state.notes;
      deletedNotes.splice(action.payload, 1);
      return {
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};

export default notesReducer;
