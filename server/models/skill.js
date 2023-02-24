const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    id:{
        type: String,
        unique: true,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    percentage:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('skillSchema', skillSchema);