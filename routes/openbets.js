const {OpenBet} = require('../models/openbet');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const openBetList = await OpenBet.find();

    if(!openBetList) {
        res.status(500).json({success: false})
    } 
    res.send(openBetList);
})

router.post(`/`, (req, res) =>{
    const openbet = new OpenBet({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
      
    })

    openbet.save().then((createdOpenbet=> {
        res.status(201).json(createdOpenbet)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports =router;




// "gameTime":"20:00 ","timeType":"pm","gameDay":"sun","gameDate":"9/10","matchName1":"manchester","matchName2":"man city","matchLeague":"england","countInStock":{"$numberInt":"2"},"__v":{"$numberInt":"0"}}