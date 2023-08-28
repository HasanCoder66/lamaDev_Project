import express from 'express'
import {user } from '../controllers/userController.js'

 const userRoutes = express.Router()


 userRoutes.get('/user', user)

 export default userRoutes 


 