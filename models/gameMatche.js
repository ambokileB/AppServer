const mongoose = require('mongoose');

const gameMatchSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
})

exports.GameMatch = mongoose.model('GameMatch', gameMatchSchema);
