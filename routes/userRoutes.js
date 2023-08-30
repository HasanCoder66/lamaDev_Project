import express from 'express'
import {userUpdate, userDelete , gettingAllUsers}  from '../controllers/userContraller.js'

 const userRoutes = express.Router()

 userRoutes.put('/:id', userUpdate)
 userRoutes.delete('/:id', userDelete)
 userRoutes.get('/:id', gettingAllUsers)

 export default userRoutes 


 