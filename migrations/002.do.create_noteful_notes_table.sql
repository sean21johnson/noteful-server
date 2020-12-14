--create notes table
CREATE TABLE IF NOT EXISTS notes (
    note_id TEXT PRIMARY KEY NOT NULL,
    note_name TEXT NOT NULL,
    modified TEXT NOT NULL,
    content TEXT NOT NULL,
    folder_id TEXT REFERENCES folders(folder_id) ON DELETE CASCADE NOT NULL
);
