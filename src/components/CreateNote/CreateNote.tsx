import React, { useEffect, useState } from 'react';
import './CreateNote.scss';

type PropsCreateNoteType = {
    noteText: string,
    tags: Array<string>,
    setNoteText: (value: string) => void,
    handleSubmit: () => void,
    setTags: (value: Array<string>) => void
}

export const CreateNote = ({ noteText, setNoteText, handleSubmit, tags, setTags }: PropsCreateNoteType) => {

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textareaValue = e.target.value;
        const regex = /#\w+/g;
        const matchedTags = textareaValue.match(regex) || [];

        setTags(matchedTags);
        setNoteText(e.currentTarget.value);
    };


    return (
        <div className='wrapperCreateNote'>
            <textarea value={noteText} onChange={handleOnChange}>
                Write your note...
            </textarea>
            <button onClick={handleSubmit}>Save</button>

            {tags.map(tag => <div key={tag}>{tag}</div>)}

        </div>
    );
}