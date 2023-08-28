import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const port = 8800


app.listen(port,() => {
    console.log('backend server works live')
})

