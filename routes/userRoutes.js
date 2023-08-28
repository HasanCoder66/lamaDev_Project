import express from 'express'
import {userReq } from '../controllers/userController.js'

 const userRoutes = express.Router()


 userRoutes.get('/user', userReq)

 export default userRoutes 


 