const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    experience:{
        type: Number,
        required: true,
    },
    projectBuilt:{
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('experienceSchema', experienceSchema);
