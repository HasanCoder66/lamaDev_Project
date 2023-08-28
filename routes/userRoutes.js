import express from 'express'
import send from 'send'

 const userRoutes = express.Router()


 userRoutes.get('/', (res , req) => {
    res.status(200),send({
        status : "success",
        message : 'Hey this is users page'
    })
 })

 export default userRoutes


 