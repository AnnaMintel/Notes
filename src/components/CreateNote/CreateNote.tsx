import React from "react";
import { NoteType } from "../../App";
import "./CreateNote.scss";

type PropsCreateNoteType = {
  noteText: string;
  tags: Array<string>;
  setNoteText: (value: string) => void;
  handleSubmit: () => void;
  setTags: (value: Array<string>) => void;
  currentEditNote: NoteType | null;
  cancelEdit: () => void;
};

export const CreateNote = ({ noteText, setNoteText, handleSubmit, tags, setTags, currentEditNote, cancelEdit }: PropsCreateNoteType) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaValue = e.target.value;
    const regex = /#\w+/g;
    const matchedTags = textareaValue.match(regex) || [];

    //@ts-ignore
    setTags([...new Set(matchedTags)] as Array<string>);

    setNoteText(e.currentTarget.value);
  };

  return (
    <div className="wrapperCreateNote">
      <div className="createNoteBlock">
        <div className="textBlock">
          <textarea value={noteText} onChange={handleOnChange} placeholder="Enter the note">
            Write your note...
          </textarea>
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
