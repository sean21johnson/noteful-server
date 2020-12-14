const express = require('express')
const uuid = require('uuid')
const logger = require('../logger')
const NotesService = require('../notes/notes-service')
const FoldersService = require('./folders-service')

const foldersRouter = express.Router()
const bodyParser = express.json()

//connected to the database and GET folders is working & so is POST request
foldersRouter
    .route('/folders')
    .get((req, res, next) => {
        FoldersService.getAllFolders(req.app.get('db'))
        .then(folders => {
            res.json(folders)
        })
        .catch(next)
    })

    .post(bodyParser, (req, res, next) => {
        for (let field of ['folder_name']) {
            if (!req.body[field]) {
                logger.error(`${field} is required`)
                return res.status(400).send(`'${field}' is required`)
            }
        }
        const { folder_name } = req.body
        const newFolder = { folder_id: uuid.v4(), folder_name }
        console.log(newFolder)
        
        FoldersService.insertNewFolder(req.app.get('db'), newFolder)
        .then(folder => {
            logger.info(`Folder with id ${newFolder.folder_id} created`)
            res
                .status(201)
                .location(`/folders/${newFolder.folder_id}`)
                .json(folder)
        })
        .catch(next)
    })

//connected to database and returning a specific folder & delete request working
foldersRouter
    .route('/folders/:id')
    .get((req, res, next) => {
        const { id } = req.params
    FoldersService.getSpecificFolder(req.app.get('db'), id)
        .then(folder => {
            if(!folder) {
                logger.error(`Folder with id ${id} not found.`)
                return res
                    .status(404)
                    .json({
                        error: { message: `Folder not found`}
                    })
            }
            return res.json(folder)
        })
        .catch(next)
    })

    .delete((req, res, next) => {
        const { id } = req.params
    FoldersService.deleteSpecificFolder(req.app.get('db'), id)
        .then(folder => {
            if(!folder) {
                logger.error(`Folder with id ${id} not found.`)
                return res
                    .status(404)
                    .json({
                        error: { message: 'Folder not found' }
                    })
            }
            logger.info(`Folder with id ${id} deleted.`)
            res
                .status(204)
                .send(`Folder with id ${id} deleted.`)
                .end()
        })
        .catch(next)
    })

    .patch(bodyParser, (req, res, next) => {
        const { folder_id, folder_name } = req.body
        const folderToUpdate = { folder_id, folder_name }
        
        const numberOfValues = Object.values(folderToUpdate).filter(Boolean).length
        if (numberOfValues === 0) {
            logger.error(`Invalid update without required fields`)
            return res
                .status(400)
                .json({
                    error: {
                        message: `Request body must contain either 'folder_id' or 'folder_name'`
                    }
                })
        }

        FoldersService.updateSpecificFolder(req.app.get('db'), req.params.id, folderToUpdate)
            .then(numRowsAffected => {
                res
                    .status(204)
                    .end()
            })
            .catch(next)
    })


module.exports = foldersRouter