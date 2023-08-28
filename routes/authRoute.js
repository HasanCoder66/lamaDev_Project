import express from 'express'
import { auth} from '../controllers/userController.js'

// import send from 'send'

 const authRoutes = express.Router()


 authRoutes.post('/register', auth)

 export default authRoutes 


 