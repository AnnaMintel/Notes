import React from "react";
import { NoteType } from "../../App";
import { Note } from "./Note/Note";
import "./Notes.scss";

type PropsNotesType = {
  notes: Array<NoteType>;
  setcurrentEditNote: (value: NoteType | null) => void;
  deleteNote: (id: string) => void;
};

export const Notes = ({ notes, setcurrentEditNote, deleteNote }: PropsNotesType) => {
  return (
    <div className="wrapperNotes">
      <div className="notesBlock">
        {notes.length > 0 ? notes.map((note, i) => <Note note={note} key={i} setcurrentEditNote={setcurrentEditNote} deleteNote={deleteNote} />) : "No Notes"}
      </div>
    </div>
  );
};
