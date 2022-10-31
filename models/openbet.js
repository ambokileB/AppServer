const mongoose = require('mongoose');

const openBetSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
})

exports.OpenBet = mongoose.model('OpenBet', openBetSchema);
