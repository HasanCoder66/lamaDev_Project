import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import dotenv from 'dotenv'
import helmet from 'helmet'
import Routes from './routes/userRoutes.js'

const uri = 'mongodb+srv://66CoderHasan:rRfk3uauLRHm2Jv5@cluster0.xrkrjyp.mongodb.net/66CoderHasan?retryWrites=true&w=majority'
dotenv.config()

const connectDb = () => {
    console.log('MongoDB Connected')
    return mongoose.connect(uri, {
        useNewUrlParser : true,
    })
}

const app = express();
const port = 8800


// MiddleWares

app.use(express.json());
app.use(morgan('common'));
app.use(helmet());

// get post Api
app.get('/api', Routes)


connectDb()
app.listen(port, () => {
    console.log('backend server works live')
})



// minutes 12:34 lamadev