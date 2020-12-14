//need to figure out how to inject the knex instance into these articles and where from

const FoldersService = {
    getAllFolders(knex) {
        return knex
            .select('*')
            .from('folders');
    },
    getSpecificFolder(knex, folderId) {
        return knex
            .select('*')
            .from('folders')
            .where('folder_id', 'ILIKE', `%${folderId}%`)
            .first();
    },
    deleteSpecificFolder(knex, folder_id) {
        return knex('folders')
            .where({ folder_id })
            .delete();
    },
    //this method might need fixing
    updateSpecificFolder(knex, folder_id, newFolderFields) {
        return knex('folders')
            .where({ folder_id })
            .update(newFolderFields);
    },
    insertNewFolder(knex, newFolder) {
        return knex
            .insert(newFolder)
            .into('folders')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    }
};

module.exports = FoldersService