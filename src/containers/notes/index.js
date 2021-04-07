import React from "react";
import { Container, Row, Col, Button, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import "./style.css";
import { useNotes } from "./hooks";
import { useSelector } from "react-redux";
import ErrorComponent from "../../Components/error";

const Login = () => {
  const {
    notes,
    showAddNote,
    setShowAddNote,
    handleAddNote,
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
              <div key={note.id} className="_card">
                <Button close onClick={() => handleDeleteNote(note.id)} />
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
            <Button
              outline
              color="secondary"
              onClick={() => setShowAddNote(true)}
            >
              <span>+</span> Add Note
            </Button>
          </div>
          <br />
          <br />
          <br />
          {showAddNote && (
            <AvForm>
              <FormGroup>
                <label>Title:</label>
                <AvField
                  required
                  name="title"
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                />
                <br />
                <label>Body:</label>
                <AvField
                  required
                  name="body"
                  type="textarea"
                  value={noteBody}
                  onChange={(e) => setNoteBody(e.target.value)}
                />
                <br />
                <div className="left-align">
                  <Button type="submit" onClick={handleAddNote} color="info">
                    save
                  </Button>
                </div>
              </FormGroup>
            </AvForm>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
