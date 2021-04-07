import { SET_ADD_NOTE, SET_DELETE_NOTE } from "./actions";

const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_NOTE:
      const addedNotes = [...state.notes, action.payload];
      return { ...state, notes: addedNotes || [] };
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
