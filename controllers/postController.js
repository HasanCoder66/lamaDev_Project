import Post from '../models/postSchema.js'

// Create post 
export const Createpost = async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = newPost.save()
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
}



// update post
// Delete post
// like post
// get a post
// get timeline posts 