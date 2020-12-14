const NotesService = {
    getAllNotes(knex) {
        return knex
            .select('*')
            .from('notes')
    },
    getSpecificNote(knex, noteId) {
        return knex
            .select('*')
            .from('notes')
            .where('note_id', 'ILIKE', `%${noteId}%`)
            .first()
    },
    //this method might need fixing
    deleteSpecificNote(knex, note_id) {
        return knex('notes')
            .where({ note_id })
            .delete();
    },
    //this method might need fixing
    updateSpecificNote(knex, note_id, newItemFields) {
        return knex('notes')
            .where({ note_id })
            .update(newItemFields);
    },
    insertNewNote(knex, newNote) {
        return knex
            .insert(newNote)
            .into('notes')
            .returning('*')
            .then(rows => rows[0])
    }
}


module.exports = NotesService