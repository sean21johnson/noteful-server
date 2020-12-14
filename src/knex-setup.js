require('dotenv').config()
const knex = require('knex')
const FoldersService = require('./folders/folders-service')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
})




// function getAllFolders() {
//     knexInstance
//         .select('*')
//         .from('folders')
//         .then(result => {
//             console.log(result)
//         })
// }

// function getAllNotes() {
//     knexInstance
//         .select('*')
//         .from('notes')
//         .then(result => {
//             console.log(result)
//         })
// }

// function getSpecificFolder(folder) {
//     knexInstance
//         .select('*')
//         .from('folders')
//         .where('folder_id', 'ILIKE', `%${folder}%`)
//         .then(result => {
//             console.log(result)
//         })
// }

// function getSpecificNote(note) {
//     knexInstance
//         .select('*')
//         .from('notes')
//         .where('note_id', 'ILIKE', `%${note}%`)
//         .then(result => {
//             console.log(result)
//         })
// }








