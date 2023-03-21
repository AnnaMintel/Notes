import React from 'react';
import './App.css';
import { CreateNote } from './components/CreateNote/CreateNote';
import { Notes } from './components/Notes/Notes';
import { Tags } from './components/Tags/Tags';

function App() {
  return (
    <div>
      <CreateNote />
      <Notes />
      <Tags />
    </div>
  );
}

export default App;
