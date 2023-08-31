import express  from 'express'
import {Createpost, updatePost , deletePost , likePost ,getPost , getTimeline}  from '../controllers/postController.js'

const  postRoutes = express.Router()

postRoutes.post('/post', Createpost)
postRoutes.put('/:id/updatepost', updatePost)
postRoutes.delete('/:id/Deletepost', deletePost)
postRoutes.put('/:id/likepost', likePost)
postRoutes.get('/:id', getPost)
postRoutes.get('/timeline/all', getTimeline)

export default postRoutes