const {Schema, Model} = require('mongoose')

const journalSchema = new Schema (
    {
        name: {
            type:string,
            required: true,
            unique:true,
            trim: true
}


})


module.exports = journalSchema