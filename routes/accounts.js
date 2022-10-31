const {Account} = require('../models/account');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const depositeList = await Account.find();

    if(!depositeList) {
        res.status(500).json({success: false})
    } 
    res.send(depositeList);
})

router.post(`/`, (req, res) =>{
    const account = new Account({
      
        account: req.body.account
      
    })

    account.save().then((createdDeposite=> {
        res.status(201).json(createdDeposite)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports =router;




// "gameTime":"20:00 ","timeType":"pm","gameDay":"sun","gameDate":"9/10","matchName1":"manchester","matchName2":"man city","matchLeague":"england","countInStock":{"$numberInt":"2"},"__v":{"$numberInt":"0"}}