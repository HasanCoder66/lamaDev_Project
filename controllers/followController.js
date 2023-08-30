import User from '../models/userSchema.js'
import bcrypt from 'bcrypt'

// followUser
export const followUser = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({$push: { followers : req.body.userId}});
                await currentUser.updateOne({$push: { followings : req.body.userId}});
                res.status(200).json('User has been followed')
            } else {
                res.status(403).json('You already follow this user')
            }
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json('you cannot follow yourself')
    }
}