import React from "react";
import { NoteType } from "../../App";
import "./CreateNote.scss";
import { HighlightWithinTextarea } from 'react-highlight-within-textarea';

type PropsCreateNoteType = {
  noteText: string;
  tags: Array<string>;
  setNoteText: (value: string) => void;
  handleSubmit: () => void;
  setTags: (value: Array<string>) => void;
  currentEditNote: NoteType | null;
  cancelEdit: () => void;
};

export const CreateNote = ({ noteText, setNoteText, handleSubmit, tags, setTags,
                             currentEditNote, cancelEdit }: PropsCreateNoteType) => {
  const handleOnChange = (textareaValue: any) => {
    const regex = /#\w+/g;
    const matchedTags = textareaValue.match(regex) || [];
    //@ts-ignore
    setTags([...new Set(matchedTags)] as Array<string>);

    setNoteText(textareaValue);
  };

  return (
    <div className="wrapperCreateNote">
      <div className="createNoteBlock">
        <div className="textBlock DraftEditor-root">
          <HighlightWithinTextarea
            value={noteText}
            highlight={/#\w+/g}
            onChange={handleOnChange}
            placeholder="Enter the note"
          />
          <div className="tags">
            {tags.map((tag, i) => (
              <div className="tag" key={i}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="createControls">
          <button onClick={handleSubmit}>{currentEditNote ? "Save" : "Add"}</button>
          {currentEditNote && (
            <button className="cancel" onClick={cancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
