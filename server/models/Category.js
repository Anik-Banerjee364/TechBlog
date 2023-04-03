const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'THIS FIELD IS REQUIRED'
    },
    image: {
        type: String,
        required:'THIS FIELD IS REQUIRED'
    },
});

module.exports = mongoose.model('Category', categorySchema);