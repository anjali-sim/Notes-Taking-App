import { SimplifiedNote } from "@src/types/types";

const NoteCard = ({ id, title, tags }: SimplifiedNote) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-column align-items-center justify-content-center h-100 gap-2">
            <span className="fs-5">{title}</span>
            {tags.length > 0 && (
              <div className="d-flex justify-content-center flex-wrap gap-1">
                {tags.map((tag) => (
                  <span className="badge bg-dark text-truncate" key={tag.id}>
                    {tag.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteCard;
