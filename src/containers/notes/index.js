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

  return (
    <Container>
      <div className="head">G Notes</div>
      <Row>
        <Col xs="4" style={{ borderRight: "1px solid rgba(0, 0, 0, 0.125)" }}>
          {notes.length ? (
            notes.map((note, index) => (
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
            ))
          ) : (
            <div>Empty!!</div>
          )}
        </Col>
        <Col xs="8">
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
