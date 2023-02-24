const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    id:{
        type: String,
        unique: true,
        required: true,
    },
    name:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: true,
        required: true
    }
})