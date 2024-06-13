import { NoteFormProps, Tag } from "@src/types/types";
import { FormEvent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { v4 as uuidV4 } from "uuid";

const NoteForm = ({
  onSubmit,
  onAddTag,
  availableTags,
  title = "",
  content = "",
  tags = [],
}: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const ContentRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      content: ContentRef.current!.value,
      tags: selectedTags,
    });
    navigate("..");
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
              <input
                type="text"
                className="form-control"
                ref={titleRef}
                id="title"
                defaultValue={title}
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="tags" className="form-label fs-4" id="tags">
                Tags
              </label>
              <CreatableReactSelect
                onCreateOption={(label) => {
                  const newTag = { id: uuidV4(), label };
                  onAddTag(newTag);
                  setSelectedTags((prev) => [...prev, newTag]);
                }}
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

          <div className="row mb-4">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="tags" className="form-label fs-4" id="content">
                  Body
                </label>
                <textarea
                  className="form-control"
                  ref={ContentRef}
                  rows={15}
                  defaultValue={content}
                  required
                />
              </div>
            </div>
          </div>

          <div className="">
            <button className="btn btn-dark" type="submit">
              Save
            </button>
            <Link to="..">
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
