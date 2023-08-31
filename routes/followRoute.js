import express from 'express'
import {followUser, unFollowUser} from '../controllers/followController.js'

const followRoutes = express.Router()

followRoutes.put('/:id/follow' , followUser)
followRoutes.put('/:id/unfollow' , unFollowUser)


export default followRoutes