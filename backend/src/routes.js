const express = require('express')
const DevController = require('./controllers/DevController')
const LikeControler = require('./controllers/LikeController')
const DislikeControler = require('./controllers/DislikeController')

const routes = express.Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.post('/devs/:devId/likes', LikeControler.store)
routes.post('/devs/:devId/dislikes', DislikeControler.store)

module.exports = routes