import React from "react";
import { Container, Row, Col, Button, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import "./style.css";
import { useNotes } from "./hooks";
import NoteForm from "../../Components/form";
import { useSelector } from "react-redux";
import ErrorComponent from "../../Components/error";

const Login = () => {
  const {
    notes,
    isEdit,
    toggleEditNote,
    toggleAddNote,
    showNoteList,
    showNoteForm,
    handleAddNote,
    handleUpdateNote,
    handleDeleteNote,
    noteTitle,
    noteBody,
    setNoteTitle,
    setNoteBody,
  } = useNotes();
  const appError = useSelector(({ appReducer }) => appReducer.appError);

  if (appError) {
    return <ErrorComponent />;
  }

  let noteListRender = <div>Empty!!</div>;

  if (notes.length) {
    noteListRender = notes.map((note) => (
      <div
        key={note.id}
        className="_card"
        onClick={(e) => toggleEditNote(note.id, e)}
      >
        <Button
          className="_delete"
          close
          onClick={(e) => handleDeleteNote(note.id, e)}
        />
        <div className="_title">{note.title}</div>
        <div className="_body">{note.body}</div>
      </div>
    ));
  }
  return (
    <Container>
      <div className="head">G Notes</div>
      <Row>
        <Col md="4" sm="12" className="notes-container">
          {showNoteList && noteListRender}
        </Col>
        <Col md="8" sm="12">
          <div className="left-align">
            <Button outline color="secondary" onClick={toggleAddNote}>
              <span>+</span> Add Note
            </Button>
          </div>
          <br />
          <br />
          <br />
          {showNoteForm && (
            <NoteForm
              isEdit={isEdit}
              handleAddNote={handleAddNote}
              handleUpdateNote={handleUpdateNote}
              noteTitle={noteTitle}
              noteBody={noteBody}
              setNoteTitle={setNoteTitle}
              setNoteBody={setNoteBody}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
