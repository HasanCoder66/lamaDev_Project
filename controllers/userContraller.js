import User from '../models/userSchema.js'
import bcrypt from 'bcrypt'


// update user
export const userUpdate = async (req , res) => {
    if ( req.body.userId  === req.params.id || req.user.isAdmin){
        if( req.body.password){
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password , salt)

            } catch (error) {
                res.status(500).json(error)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set : req.body,
            })
            res.status(200).json("Account Has been Updated")
        } catch (error) {
           res.status(500).json(error)
        }
    } else {
        return res.status(403).json("You can update only your account")
    }
}
// delete 
// edit
// get data 

