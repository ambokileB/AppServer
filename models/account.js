
const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    account: {
        type: Number,
        min:100,
        max:9000000000,
        required: true
    }
    

})

exports.Account = mongoose.model('Account', accountSchema);


