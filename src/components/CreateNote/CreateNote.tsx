import React, { useEffect, useState } from 'react';
// import s from './CreateNote.scss';


export const CreateNote = () => {

    const [noteText, setNoteText] = useState<string>('');
    const [tags, setTags] = useState<Array<string>>([]);

    const handleOnChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const textareaValue = e.target.value;
        const regex = /#\w+/g; 
        const matchedTags = textareaValue.match(regex) || [];

        setTags(matchedTags);
        setNoteText(e.currentTarget.value);
    };


    return (
        <div>
            <textarea value={noteText} onChange={handleOnChange}>
                Write your note...
            </textarea>
            <button onClick={() => { }}>Save</button>

            {tags.map(tag => <div key={tag}>{tag}</div>)}

        </div>
    );
}