import 'bootstrap/dist/css/bootstrap.min.css';
import { NoteData, RawNote, Tag } from './types/types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useMemo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NewNote from './components/NewNote';
import {v4 as uuidV4} from "uuid";
import NoteList from './components/NoteList';
import NoteLayout from './components/NoteLayout';
import Note from './components/Note';
import EditNote from './components/EditNote';

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return {...note, tags: tags.filter(tag => note.tagIds.includes(tag.id))}
    })
  }, [notes, tags])

  function onCreate({tags, ...data}: NoteData) {
    setNotes(prevNotes => {
      return [...prevNotes, {...data, id: uuidV4(), tagIds: tags.map(tag => tag.id)},]
    })
  }

  function onUpdate(id: string, {tags, ...data}: NoteData) {
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map(tag => tag.id) }
        } else {
          return note
        }
      })
    })
  }

  function onDelete(id: string) {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id !== id)
    })
  }

  function addTag(tag: Tag) {
    setTags(prev => [...prev, tag])
  }
  
  return (
    <>
    <div className="container">
    <Routes>
      <Route path="/" element={<NoteList notes={notesWithTags} availableTags={tags} />} />
      <Route path="/new" element={<NewNote onSubmit={onCreate} onAddTag={addTag} availableTags={tags} />} />
      <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
        <Route index element={<Note onDelete={onDelete} />} />
        <Route path="edit" element={<EditNote onSubmit={onUpdate} onAddTag={addTag} availableTags={tags} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </div>
    </>
  );
}

export default App
