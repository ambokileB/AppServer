
const express = require('express')
const Matche = require('../model/matches')

const router = express.Router();
 




router.get(`/`, async(req,res)=>{
    const matcheList = await Matche.find();
    if(!matcheList){
        res.status(500).json({success:false})
    }
    res.send(matcheList);
  
})


router.post(`/`,(req,res)=>{

const matche = new Matche({
    gameTime:req.body.gameTime,
    timeType:req.body.timeType,
    gameDay:req.body.gameDay,
    gameDate:req.body.gameDate,
    matchName1:req.body.matchName1,
    matchName2:req.body.matchName2,
    matchLeague:req.body.matchLeague,
    countInStock:req.body.countInStock
    
})

matche.save().then((createdMatch=>{
    res.status(201).json(createdMatch)
})).catch((err)=>{
    res.status(500).json({
        error:err,
        success:false
    })

})

})

module.exports = router;