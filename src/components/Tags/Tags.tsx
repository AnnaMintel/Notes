import React from "react";
import { FilterType } from "../../App";
import "./Tags.scss";

type PropsTagsType = {
  tagsList: string[];
  inputTagValue: string;
  setTagsList: (value: string[]) => void;
  setInputTagValue: (value: string) => void;
  filterNotes: (tag: string) => void;
  filter: FilterType;
  setFilter: (value: "All" | string) => void;
};

export const Tags = ({ tagsList, setTagsList, inputTagValue, setInputTagValue, filterNotes, filter, setFilter }: PropsTagsType) => {
  const onTagChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputTagValue(e.target.value);
  };

  const addTag = () => {
    if (inputTagValue.trim()) {
      let newTagsArray = [...tagsList, inputTagValue.trim()];

      //@ts-ignore
      setTagsList([...new Set(newTagsArray)] as Array<string>);
      setInputTagValue("");
    }
  };

  const deleteTag = (tagToDelete: string) => {
    setTagsList(tagsList.filter((tag) => tag !== tagToDelete));
    // (filter === tagToDelete) && setFilter('All');
  };

  return (
    <div className="wrapperTags">
      <div className="tagsControls">
        <input type="text" value={inputTagValue} onChange={onTagChange} placeholder="#tag" />
        <button onClick={addTag}>Add tag</button>
      </div>
      <div className="tagsAll">
        <div onClick={() => filterNotes("All")} className={`tag all ${filter === "All" ? "active" : ""}`}>
          All
        </div>
        {tagsList.map((tag, i) => (
          <div className={`tag ${filter === tag ? "active" : ""}`} key={i} onClick={() => filterNotes(tag)}>
            {tag} <button onClick={() => deleteTag(tag)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};
