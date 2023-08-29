import express from 'express'
import {userUpdate}  from '../controllers/userContraller.js'

 const userRoutes = express.Router()

 userRoutes.put('/:id',userUpdate)

 export default userRoutes 


 