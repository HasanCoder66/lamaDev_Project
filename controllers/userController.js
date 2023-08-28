import User from '../models/userSchema.js'
import bcrypt from 'bcrypt'


// console.log(userSchema);

//Login
export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(404).json("User not found")

        const validPassword = await bcrypt.compare(req.body.password , user.password)
        !password && res.status(404).json('Wrong password')
    } catch (error) {
        console.log(error)
    }
}

// Register
export const register = async (req, res) => {

    try {

        //Generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        // Create New User
        const newUser = new User({
            userName: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        // Save User and respond
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {

        console.log(error)
    }
}


// console.log(req.body)
// res.status(200).send(
//     "hey this is auth route"
// )
    //  export default {register}