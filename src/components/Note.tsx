import { Link } from "react-router-dom";
import { useNote } from "./NoteLayout";

const Note = () => {
  const note = useNote();
  return (
    <>
      <div className="row align-items-center mb-4">
        <div className="col">
          <h1>{note.title}</h1>
          <div className="d-flex flex-wrap gap-1">
            {note.tags.map((tag) => (
              <span className="badge bg-dark text-truncate" key={tag.id}>
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        <div className="col">
          <div className="d-flex gap-2">
            <Link to={`/${note.id}/edit`}>
              <button className="btn btn-outline-primary">Edit</button>
            </Link>
            <button className="btn btn-outline-danger">Delete</button>
            <Link to="/">
            <button className="btn btn-outline-dark">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
