import express from 'express'
import {userUpdate, userDelete}  from '../controllers/userContraller.js'

 const userRoutes = express.Router()

 userRoutes.put('/:id',userUpdate)
 userRoutes.delete('/:id',userDelete)

 export default userRoutes 


 