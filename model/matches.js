
const mongoose = require('mongoose');

const matcheSchema = mongoose.Schema({
    gameTime:String,
    timeType:String,
    gameDay:String,
    gameDate:String,
    matchName1:String,
    matchName2:String,
    matchLeague:String,
    countInStock:{
        type:Number,
        required:true
    }

})



exports.Matche = mongoose.model('Matche', matcheSchema);