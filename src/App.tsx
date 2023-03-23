import React, { useEffect, useState } from 'react';
import './App.css';
import { v1 } from 'uuid';
import { CreateNote } from './components/CreateNote/CreateNote';
import { Notes } from './components/Notes/Notes';
import { Tags } from './components/Tags/Tags';

export type NoteType = {
  id: string,
  note: string
}

function App() {

  let id = v1();

  const [noteText, setNoteText] = useState<string>('');
  const [tags, setTags] = useState<Array<string>>([]);
  // const [tagsList, setTagsList] = useState<Array<string>>([]);
  const [notes, setNotes] = useState<Array<NoteType>>([]);
  const [currentEditNote, setcurrentEditNote] = useState<NoteType | null>(null);

  const saveNote = () => {
    setNotes([...notes, {id: id, note: noteText}]);
    setNoteText('');
    setTags([]);
  }

  const editNote = () => {
    setNotes(notes.map(note => note.id === currentEditNote?.id ? {...note, note: noteText} : note));
    setNoteText('');
    setcurrentEditNote(null);
  }

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
    setcurrentEditNote(null);
    setNoteText('');
  }

  useEffect(()=> {
    currentEditNote && setNoteText(currentEditNote.note)
  },[currentEditNote])

  return (
    <div className='app'>
      <div className='firstBlock'>
        <CreateNote noteText={noteText} setNoteText={setNoteText}
          handleSubmit={currentEditNote ? editNote : saveNote} tags={tags} setTags={setTags}
        />
        <Tags tags={tags} setTags={setTags} />
      </div>
      <Notes  notes={notes} setcurrentEditNote={setcurrentEditNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
