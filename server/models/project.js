const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    id:{
        type: String,
        unique: true,
        required: true
    },
    title:{
        type: String,
        trim: true
    },
    description:{
        type: String,
        required: true,
    },
    images:{
        type: Object,
        required: true,
    },
    category:{
        type: String,
    }
});

module.exports = mongoose.model("projectSchema", projectSchema);