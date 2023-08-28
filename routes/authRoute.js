import express from 'express'
import { auth} from '../controllers/userController.js'
// import send from 'send'

 const authRoutes = express.Router()


 authRoutes.get('/auth', auth)

 export default authRoutes 


 