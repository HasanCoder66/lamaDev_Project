import express  from 'express'
import {Createpost}  from '../controllers/postController.js'

const  postRoutes = express.Router()

postRoutes.post('/post', Createpost)

export default postRoutes