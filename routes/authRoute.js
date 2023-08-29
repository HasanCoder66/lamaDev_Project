import express from 'express'
import { register , login} from '../controllers/authController.js'

// import send from 'send'

 const authRoutes = express.Router()


 authRoutes.post('/register', register)
 authRoutes.post('/login', login)

 export default authRoutes 


 