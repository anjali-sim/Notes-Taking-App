import { NoteListProps, Tag } from "@src/types/types";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import NoteCard from "./NoteCard";

const NoteList = ({ availableTags, notes }: NoteListProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState("");

  const filteredNotes = useMemo(() => {
    return notes.filter(note => {
      return (
        (title === "" ||
          note.title.toLowerCase().includes(title.toLowerCase())) &&
        (selectedTags.length === 0 ||
          selectedTags.every(tag =>
            note.tags.some(noteTag => noteTag.id === tag.id)
          ))
      )
    })
  }, [title, selectedTags, notes])

  return (
    <>
      <div className="row align-items-center my-4">
        <div className="col">
          <h1>Notes</h1>
        </div>
        <div className="col">
          <div className="d-flex gap-2">
            <Link to="/new">
              <button className="btn btn-dark">Create</button>
            </Link>
            <button className="btn btn-outline-dark">Edit Tags</button>
          </div>
        </div>
      </div>

      <form>
        <div className="row mb-4">
          <div className="col">
            <div className="form-group" id="title">
              <label htmlFor="title" className="form-label fs-5">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="tags" className="form-label fs-4" id="tags">
                Tags
              </label>
              <ReactSelect
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                options={availableTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
                isMulti
              />
            </div>
          </div>
        </div>
      </form>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3">
        {filteredNotes.map(note => (
            <div className="col" key={note.id}>
                <NoteCard id={note.id} title={note.title} tags={note.tags} />
                </div>
        ))}
      </div>
    </>
  );
};

export default NoteList;
