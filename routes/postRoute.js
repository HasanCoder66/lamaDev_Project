import express  from 'express'
import {Createpost, updatePost}  from '../controllers/postController.js'

const  postRoutes = express.Router()

postRoutes.post('/post', Createpost)
postRoutes.put('/:id/updatepost', updatePost)

export default postRoutes