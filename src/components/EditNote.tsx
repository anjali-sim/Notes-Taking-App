import NoteForm from "@src/components/NoteForm";
import { EditNoteProps } from "@src/types/types";
import { useNote } from "./NoteLayout";

const EditNote = ({ onSubmit, onAddTag, availableTags }: EditNoteProps) => {
  const note = useNote();
  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
      title={note.title}
      content={note.content}
      tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default EditNote;
