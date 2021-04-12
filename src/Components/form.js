import React from "react";
import { Button, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

const NoteForm = (props) => {
  const {
    isEdit,
    handleAddNote,
    handleUpdateNote,
    noteTitle,
    noteBody,
    setNoteTitle,
    setNoteBody,
  } = props;

  return (
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
          {isEdit ? (
            <Button type="submit" onClick={handleUpdateNote} color="info">
              update
            </Button>
          ) : (
            <Button type="submit" onClick={handleAddNote} color="info">
              save
            </Button>
          )}
        </div>
      </FormGroup>
    </AvForm>
  );
};

export default NoteForm;
