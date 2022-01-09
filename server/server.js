const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')


dotenv.config({path: './config/config.env' })

connectDB()

const app = express()

// morgan middleway is used for logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


const PORT = process.env.PORT || 3000

app.listen(
PORT, 
console.log (`server running in ${process.env.NODE_ENV} mode on ${PORT}`)
)




