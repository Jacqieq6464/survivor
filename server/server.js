const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const cors = require('cors')


dotenv.config({ path: './config/config.env' });

connectDB()

const app = express();



// morgan middleway is used for logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000
app.listen(
PORT, 
console.log (`server running in ${process.env.NODE_ENV} mode on ${PORT}`)
)




