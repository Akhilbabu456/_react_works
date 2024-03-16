const mongoose = require("mongoose")

const noteSchema =  mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
        unique: true
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Notes", noteSchema)