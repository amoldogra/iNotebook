const mongoose = require('mongoose');

const notesSchema = new Schema({
    title:{
        type: String,
       require: true
    },
    description:{
        type: String,
        require: true,
    },
    tag:{
        type: String,
       default: "General",
    },
    date:{
        type: Date,
        require: Date.now
    },
})

module.exports = mongoose.model('Notes', notesSchema);