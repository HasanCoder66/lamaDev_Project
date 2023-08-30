import express from 'express'
import {followUser} from '../controllers/followController.js'

const followRoutes = express.Router()

followRoutes.put('/api' , followUser)


export default followRoutes