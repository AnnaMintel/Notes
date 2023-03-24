import React from "react";
import { NoteType } from "../../../App";
import "./Note.scss";
import deleteIcon from "../../../assets/delete.svg";
import editIcon from "../../../assets/edit.svg";

type PropsNoteType = {
  note: NoteType;
  setcurrentEditNote: (value: NoteType | null) => void;
  deleteNote: (id: string) => void;
};

export const Note = ({ note, setcurrentEditNote, deleteNote }: PropsNoteType) => {
  return (
    <div className="note" key={note.id}>
      <div className="noteControls">
        <div onClick={() => setcurrentEditNote(note)}>
          <img src={editIcon} alt="edit icon" width="25px" />
        </div>
        <div onClick={() => deleteNote(note.id)}>
          <img src={deleteIcon} alt="delete icon" width="25px" />
        </div>
      </div>
      <p>{note.note}</p>
      <div className="noteTags">
        <hr />
        <div className="noteTagsItems">
          {note.noteTags.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
