import express  from 'express'
import {Createpost, updatePost , deletePost , likePost ,getPost , getTimeline}  from '../controllers/postController.js'

const  postRoutes = express.Router()

// localhost:8800/api/post
postRoutes.post('/post', Createpost)


// localhost:8800/api/:id/updatepost
postRoutes.put('/:id/updatepost', updatePost)


// localhost:8800/api/:id/deletePost
postRoutes.delete('/:id/Deletepost', deletePost)


// localhost:8800/api/:id/likePost
postRoutes.put('/:id/likepost', likePost)


// localhost:8800/api/:id
postRoutes.get('/:id', getPost)


//localhost:8800/api/timeline/all
postRoutes.get('/timeline/all', getTimeline)

export default postRoutes