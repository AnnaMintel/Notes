import React from 'react';
import './Tags.scss';

type PropsTagsType = {
    tags: string[],
    setTags: (value: string[]) => void
}

export const Tags = ({ tags, setTags }: PropsTagsType) => {

    const deleteTag = (index: number) => {
        const newTags:any = [...tags];
        setTags(newTags.splice(index, 1));
    }

    return (
        <div className='wrapperTags'>
            <div>
                {tags.map((tag, index) => <div className='tag' key={tag}>
                    {tag}
                    <button onClick={() => deleteTag(index)}>X</button>
                </div>)}
            </div>

        </div>
    );
}