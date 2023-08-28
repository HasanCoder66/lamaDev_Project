import express from 'express'
import {login } from '../controllers/userController.js'

 const userRoutes = express.Router()


 userRoutes.get('/user', login)

 export default userRoutes 


 