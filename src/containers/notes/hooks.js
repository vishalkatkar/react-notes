import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAddNote, setDeletNote } from "./actions";
import { setAppError } from "../../redux/commanActions";

export const useNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(({ notesReducer }) => notesReducer.notes);

  const [noteTitle, setNoteTitle] = useState(null);
  const [noteBody, setNoteBody] = useState(null);
  const [counter, setCounterId] = useState(0);
  const [showAddNote, setShowAddNote] = useState(false);

  const handleAddNote = () => {
    try {
      if (!noteTitle || !noteBody) return;
      dispatch(setAddNote({ id: counter, title: noteTitle, body: noteBody }));
      setCounterId(counter + 1);
    } catch (error) {
      dispatch(setAppError(true));
    }
  };

  const handleDeleteNote = (payload) => {
    try {
      dispatch(setDeletNote(payload));
    } catch (error) {
      dispatch(setAppError(true));
    }
  };

  return {
    notes,
    showAddNote,
    setShowAddNote,
    handleAddNote,
    handleDeleteNote,
    noteTitle,
    noteBody,
    setNoteTitle,
    setNoteBody,
  };
};
