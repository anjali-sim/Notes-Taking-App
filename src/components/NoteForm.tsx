import { NoteFormProps, Tag } from "@src/types/types";
import { FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";

const NoteForm = ({onSubmit}: NoteFormProps) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const markdownRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: [],
        })
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="title" className="form-label fs-4">
                Title
              </label>
              <input type="text" className="form-control" ref={titleRef} id="title" required />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="tags" className="form-label fs-4" id="tags">
                Tags
              </label>
              <CreatableReactSelect value={selectedTags.map(tag => {
                return {label: tag.label, value: tag.id}
              })}
              onChange={tags => {
                setSelectedTags(tags.map(tag => {
                    return {label: tag.label, id: tag.value}
                }))
              }}
              isMulti />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="tags" className="form-label fs-4" id="markdown">
                  Body
                </label>
                <textarea className="form-control" ref={markdownRef} rows={15} required />
              </div>
            </div>
          </div>

          <div className="">
            <button className="btn btn-dark" type="submit">
              Save
            </button>
            <Link to=".." >
            <button className="btn btn-outline-dark" type="button">
              Cancel
            </button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NoteForm;
