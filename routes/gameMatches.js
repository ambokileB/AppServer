const {GameMatch} = require('../models/gameMatche');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const gameMatchList = await GameMatch.find();

    if(!gameMatchList) {
        res.status(500).json({success: false})
    } 
    res.send(gameMatchList);
})

router.post(`/`, (req, res) =>{
    const gamematch = new GameMatch({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
      
    })

    gamematch.save().then((createdGameMatch=> {
        res.status(201).json(createdGameMatch)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports =router;




// "gameTime":"20:00 ","timeType":"pm","gameDay":"sun","gameDate":"9/10","matchName1":"manchester","matchName2":"man city","matchLeague":"england","countInStock":{"$numberInt":"2"},"__v":{"$numberInt":"0"}}