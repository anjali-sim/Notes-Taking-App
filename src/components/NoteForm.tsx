import CreatableReactSelect from "react-select/creatable";

const NoteForm = () => {
  return (
    <form>
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input type="text" className="form-control" id="title" required />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label htmlFor="tags" className="form-label">
                Tags
              </label>
              <CreatableReactSelect isMulti />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NoteForm;
