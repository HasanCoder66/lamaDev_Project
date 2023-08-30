import express from 'express'
import {userUpdate, userDelete , getUsers}  from '../controllers/userContraller.js'

 const userRoutes = express.Router()

 userRoutes.put('/:id', userUpdate)
 userRoutes.delete('/:id', userDelete)
 userRoutes.get('/:id', getUsers)

 export default userRoutes 


 