import express  from 'express'
import {Createpost, updatePost , deletePost , likePost ,getPost}  from '../controllers/postController.js'

const  postRoutes = express.Router()

postRoutes.post('/post', Createpost)
postRoutes.put('/:id/updatepost', updatePost)
postRoutes.delete('/:id/Deletepost', deletePost)
postRoutes.put('/:id/likepost', likePost)
postRoutes.get('/:id', getPost)

export default postRoutes