import React from 'react';
import './Tags.scss';

type PropsTagsType = {
    tagsList: string[],
    inputTagValue: string,
    setTagsList: (value: string[]) => void,
    setInputTagValue: (value: string) => void
}

export const Tags = ({ tagsList, setTagsList, inputTagValue, setInputTagValue }: PropsTagsType) => {

    const onTagChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputTagValue(e.target.value);
    };

    const addTag = () => {
        if (inputTagValue.trim()) {
            setTagsList([...tagsList, inputTagValue.trim()]);
            setInputTagValue('');
        }
    };

    const deleteTag = (tagToDelete: string) => {
        setTagsList(tagsList.filter((tag) => tag !== tagToDelete));
    };

    return (
        <div className='wrapperTags'>
            <div>
                <input type="text" value={inputTagValue} onChange={onTagChange} />
                <button onClick={addTag}>Add tag</button>
            </div>
            <div>
                {tagsList.map((tag) => (
                    <div className='tag' key={tag}>
                        {tag} <button onClick={() => deleteTag(tag)}>X</button>
                    </div>
                ))}
            </div>
        </div>
    );
}