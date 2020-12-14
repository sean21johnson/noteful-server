const express = require('express')
const uuid = require('uuid')
const logger = require('../logger')
const NotesService = require('./notes-service')

const notesFolder = express.Router()
const bodyParser = express.json()

//connected to the database and GET notes is working & so is post request
notesFolder
    .route('/notes')
    .get((req, res, next) => {
        NotesService.getAllNotes(req.app.get('db'))
        .then(notes => {
            res.json(notes)
        })
        .catch(next)
    })

    .post(bodyParser, (req, res, next) => {
        for (let field of ['note_name', 'content', 'folder_id']) {
            if (!req.body[field]) {
                logger.error(`${field} is required`)
                return res.status(400).send(`'${field}' is required`)
            }
        }
        const { note_name, content, folder_id } = req.body
        const newNote = { 
            note_id: uuid.v4(), 
            note_name,
            modified: new Date(),
            content,
            folder_id 
        }
 
        
        NotesService.insertNewNote(req.app.get('db'), newNote)
        .then(note => {
            logger.info(`Folder with id ${newNote.note_id} created`)
            res
                .status(201)
                .location(`/notes/${newNote.note_id}`)
                .json(note)
        })
        .catch(next)
    })

//connected to database and getting a specific note is working
notesFolder
    .route('/notes/:id')
    .get((req, res, next) => {
        const { id } = req.params
    NotesService.getSpecificNote(req.app.get('db'), id)
        .then(note => {
            if(!note) {
                logger.error(`Notewith id ${id} not found.`)
                return res
                    .status(404)
                    .json({
                        error: { message: `Note not found`}
                    })
            }
            return res.json(note)
        })
        .catch(next)
    })

    //need to update delete request
    .delete((req, res, next) => {
        const { id } = req.params
    NotesService.deleteSpecificNote(req.app.get('db'), id)
        .then(note => {
            if(!note) {
                logger.error(`Note with id ${id} not found.`)
                return res
                    .status(404)
                    .json({
                        error: { message: 'Note not found' }
                    })
            }
            logger.info(`Note with id ${id} deleted.`)
            res
                .status(204)
                .send(`Note with id ${id} deleted.`)
                .end()
        })
        .catch(next)
    })

    .patch(bodyParser, (req, res, next) => {
        const { note_id, note_name, modified, content, folder_id } = req.body
        const noteToUpdate = { note_id, note_name, modified, content, folder_id }
        
        const numberOfValues = Object.values(noteToUpdate).filter(Boolean).length
        if (numberOfValues === 0) {
            logger.error(`Invalid update without required fields`)
            return res
                .status(400)
                .json({
                    error: {
                        message: `Request body must contain either 'note_id', 'note_name', 'modified', 'content', 'folder_id'`
                    }
                })
        }

        NotesService.updateSpecificNote(req.app.get('db'), req.params.id, noteToUpdate)
            .then(numRowsAffected => {
                res
                    .status(204)
                    .end()
            })
            .catch(next)
    })


module.exports = notesFolder