import NoteForm from "@src/components/NoteForm";

const NewNote = ({onSubmit}) => {
  return (
    <>
    <h1 className="mb-4">New Note</h1>
    <NoteForm onSubmit={onSubmit} />
    </>
  )
};

export default NewNote;
