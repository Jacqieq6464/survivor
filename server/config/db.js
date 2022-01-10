const mongoose = require('mongoose')

// Lines 7 - 9 will prevent warnings in the console
const connectDB = async () => {
try {
   const connect = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        usefindAndModify: false,


   })


   console.log (`MongoDB Connected: ${connect.connection.host}`)

} catch (error) {
        console.error(err)
        process.exit(1)
}


}
module.exports = connectDB