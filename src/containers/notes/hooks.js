import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAddNote, setUpdateNote, setDeletNote } from "./actions";
import { setAppError } from "../../redux/commanActions";

export const useNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(({ notesReducer }) => notesReducer.notes);

  const [noteTitle, setNoteTitle] = useState(null);
  const [noteBody, setNoteBody] = useState(null);
  const [counter, setCounterId] = useState(0);
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const toggleAddNote = () => {
    setIsEdit(false);
    setShowNoteForm(true);
  };

  const toggleEditNote = (id, event) => {
    event.stopPropagation();
    setIsEdit(true);
    setShowNoteForm(true);
    setUpdateId(id);
    if (notes[id]) {
      setNoteTitle(notes[id].title);
      setNoteBody(notes[id].body);
    }
  };

  const handleAddNote = () => {
    try {
      if (!noteTitle || !noteBody) return;
      dispatch(setAddNote({ id: counter, title: noteTitle, body: noteBody }));
      clearFiled();
      setCounterId(counter + 1);
    } catch (error) {
      dispatch(setAppError(true));
    }
  };

  const handleUpdateNote = () => {
    try {
      if (!noteTitle || !noteBody) return;
      dispatch(
        setUpdateNote({ id: updateId, title: noteTitle, body: noteBody })
      );
      clearFiled();
    } catch (error) {
      dispatch(setAppError(true));
    }
  };

  const handleDeleteNote = (payload, event) => {
    try {
      event.stopPropagation();
      dispatch(setDeletNote(payload));
      clearFiled();
    } catch (error) {
      dispatch(setAppError(true));
    }
  };

  const clearFiled = () => {
    setShowNoteForm(false);
    setIsEdit(false);
    setNoteTitle("");
    setNoteBody("");
  };

  return {
    notes,
    isEdit,
    toggleEditNote,
    toggleAddNote,
    showNoteForm,
    handleAddNote,
    handleUpdateNote,
    handleDeleteNote,
    noteTitle,
    noteBody,
    setNoteTitle,
    setNoteBody,
  };
};
