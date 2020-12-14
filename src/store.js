const uuid = require('uuid')

//eventually the id will need to be replaced with uuid
const folders = [
    {
        id: uuid.v4(),
        name: "Important"
    },
    {
        id: uuid.v4(),
        name: "Helpful"
    },
    {
        id: uuid.v4(),
        name: "Profound"
    },
    {
        id: uuid.v4(),
        name: "Store Only Folder"
    }
]

//eventually the folderID will need to be matched with the folders id
const notes = [
    {
        id: uuid.v4(),
        name: "Dogs",
        modified: new Date(),
        folderId: 1,
        content: "Dogs are fun animals"
    },
    {
        id: uuid.v4(),
        name: "Cats",
        modified: new Date(),
        folderId: 1,
        content: "Cats are fun animals"
    },
    {
        id: uuid.v4(),
        name: "Birds",
        modified: new Date(),
        folderId: 2,
        content: "Birds are fun animals"
    },    {
        id: uuid.v4(),
        name: "Bees",
        modified: new Date(),
        folderId: 2,
        content: "Bees are fun animals"
    },    {
        id: uuid.v4(),
        name: "Lizards",
        modified: new Date(),
        folderId: 3,
        content: "Lizards are fun animals"
    },    {
        id: uuid.v4(),
        name: "Snakes",
        modified: new Date(),
        folderId: 3,
        content: "Snakes are fun animals"
    },    {
        id: uuid.v4(),
        name: "Bugs",
        modified: new Date(),
        folderId: 3,
        content: "Bugs are fun animals"
    },      {
        id: uuid.v4(),
        name: "Store Only",
        modified: new Date(),
        folderId: 3,
        content: "This folder isn't in the database"
    }
]

module.exports = { folders, notes }
  