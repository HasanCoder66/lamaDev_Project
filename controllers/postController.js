import Post from '../models/postSchema.js'

// Create post 
export const Createpost = async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
}

// update post
export const updatePost = async (req , res ) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body})
            res.status(200).json('The post has been updated')
        }else {
            res.status(403).json('you can update only your post')
        }    
    } catch (error) {
        res.status(500).json(error)
    }
    
}



// Delete post
// like post
// get a post
// get timeline posts 