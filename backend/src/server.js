const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const server = express()
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
server.use(cors())
server.use(express.json())
server.use(routes)
server.listen(3333)