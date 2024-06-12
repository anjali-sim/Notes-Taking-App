import 'bootstrap/dist/css/bootstrap.min.css';
import { RawNote, Tag } from './types/types';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  
  return (
    <>
    <div className="container">
      
    </div>
    </>
  );
}

export default App
