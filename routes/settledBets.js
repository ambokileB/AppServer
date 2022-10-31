const {SettledBet} = require('../models/settledBet');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const settledBetList = await SettledBet.find();

    if(!settledBetList) {
        res.status(500).json({success: false})
    } 
    res.send(settledBetList);
})

router.post(`/`, (req, res) =>{
    const settledBet = new SettledBet({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
      
    })

    settledBet.save().then((createdSettledbet=> {
        res.status(201).json(createdSettledbet)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports =router;




// "gameTime":"20:00 ","timeType":"pm","gameDay":"sun","gameDate":"9/10","matchName1":"manchester","matchName2":"man city","matchLeague":"england","countInStock":{"$numberInt":"2"},"__v":{"$numberInt":"0"}}