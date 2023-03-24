import React, { useEffect, useState } from "react";
import "./App.scss";
import { v1 } from "uuid";
import { CreateNote } from "./components/CreateNote/CreateNote";
import { Notes } from "./components/Notes/Notes";
import { Tags } from "./components/Tags/Tags";
import { mockNotes } from "./mockData/notes";
import { mockTags } from "./mockData/tags";

export type NoteType = {
  id: string;
  note: string;
  noteTags: Array<string>;
};

export type FilterType = "All" | string;

function App() {
  const [noteText, setNoteText] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);
  const [tagsList, setTagsList] = useState<Array<string>>(mockTags); //!
  const [notes, setNotes] = useState<Array<NoteType>>(mockNotes); //!
  const [filteredNotes, setFilteredNotes] = useState<Array<NoteType>>(notes);
  const [filter, setFilter] = useState<FilterType>("All");

  const [currentEditNote, setcurrentEditNote] = useState<NoteType | null>(null);
  const [inputTagValue, setInputTagValue] = useState("");

  const saveNote = () => {
    if (noteText.trim() !== "") {
      setNotes([...notes, { id: v1(), note: noteText, noteTags: tags }]);
      setTagsList([...tagsList.concat(tags)]);
    }
    setNoteText("");
    setTags([]);
  };

  const editNote = () => {
    setNotes(notes.map((note) => (note.id === currentEditNote?.id ? { ...note, note: noteText, noteTags: tags } : note)));
    //@ts-ignore
    setTagsList([...new Set([...tagsList.concat(tags)])] as Array<string>);
    setTags([]);

    setNoteText("");
    setcurrentEditNote(null);
  };

  const cancelEdit = () => {
    setTags([]);
    setNoteText("");
    setcurrentEditNote(null);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    setcurrentEditNote(null);
    setNoteText("");
  };

  useEffect(() => {
    currentEditNote && setNoteText(currentEditNote.note);
    currentEditNote && setTags(currentEditNote.noteTags);
  }, [currentEditNote]);

  // useEffect(() => {
  //   fetch("./mockData/notes.json").then(res => console.log(res.json()))
  // }, []);

  useEffect(() => {
    setFilteredNotes(notes);
    setFilter("All");
  }, [notes]);

  const filterNotes = (tag: string) => {
    setFilter(tag);
    tag !== "All" ? setFilteredNotes(notes.filter((note) => note.noteTags.some((el) => el === tag))) : setFilteredNotes(notes);
  };

  return (
    <div className="app">
      <div className="header">
        <h2>Notes</h2>
      </div>
      <CreateNote
        noteText={noteText}
        setNoteText={setNoteText}
        handleSubmit={currentEditNote ? editNote : saveNote}
        tags={tags}
        setTags={setTags}
        currentEditNote={currentEditNote}
        cancelEdit={cancelEdit}
      />
      <Tags
        tagsList={tagsList}
        setTagsList={setTagsList}
        inputTagValue={inputTagValue}
        setInputTagValue={setInputTagValue}
        filterNotes={filterNotes}
        filter={filter}
        setFilter={setFilter}
      />

      <Notes notes={filteredNotes} setcurrentEditNote={setcurrentEditNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
