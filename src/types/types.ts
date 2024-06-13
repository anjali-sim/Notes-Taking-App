export type Tag = {
    id: string,
    label: string
}

export type Note = {
    id: string
} & NoteData

export type NoteData = {
    title: string,
    content: string,
    tags: Tag[]
}

export type NoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void,
    availableTags: Tag[]
}

export type RawNote = {
    id: string
} & RawNoteData

export type RawNoteData = {
    title: string,
    content: string,
    tagIds: string[]
}

export type NewNoteProps = {
    onSubmit: (data: NoteData) => void,
    onAddTag: (tag: Tag) => void,
    availableTags: Tag[]
}

export type NoteListProps = {
    availableTags: Tag[],
    notes: SimplifiedNote[]
}

export type SimplifiedNote = {
    tags: Tag[],
    title: string,
    id: string
}

export type NoteLayoutProps = {
    notes: Note[]
}