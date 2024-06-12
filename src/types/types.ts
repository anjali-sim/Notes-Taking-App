export type Tag = {
    id: string,
    label: string
}

export type Note = {
    id: string
} & NoteData

export type NoteData = {
    title: string,
    markdown: string,
    tags: Tag[]
}

export type NoteFormProps = {
    onSubmit: (data: NoteData) => void
}

export type RawNote = {
    id: string
}

export type RawNoteData = {
    title: string,
    markdown: string,
    tagIds: string[]
}