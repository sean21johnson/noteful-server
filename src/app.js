require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const foldersService = require('./folders/folders-service')

// const validateToken = require('./validate-token')
const errorHandler = require('./error-handler')
const foldersRouter = require('./folders/folders-router')
const notesRouter = require('./notes/notes-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(cors())
app.use(helmet())
// app.use(validateToken)

app.use(foldersRouter)
app.use(notesRouter)

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use(errorHandler)

module.exports = app