const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    categoryname: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Category', schema);