import React from 'react';
import { NoteType } from '../../App';
import './Notes.scss';

type PropsNotesType = {
    notes: Array<NoteType>,
    setcurrentEditNote: (value: NoteType | null) => void,
    deleteNote: (id: string) => void
}

export const Notes = ({ notes, setcurrentEditNote, deleteNote }: PropsNotesType) => {


    return (
        <div className='wrapperNotes'>

            {notes.map(note =>
                <div className='note' key={note.id} >
                    <div>
                        <button onClick={() => setcurrentEditNote(note)}>edit</button>
                        <button onClick={() => deleteNote(note.id)}>delete</button>
                    </div>
                    {note.note}
                    <div>
                        __________________
                        теги, которые есть в заметке
                    </div>
                </div>)
            }
        </div>
    );
}