const {User} = require('../models/user');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
    const userList = await User.find();

    if(!userList) {
        res.status(500).json({success: false})
    } 
    res.send(userList);
})

router.post(`/`, (req, res) =>{
    const user = new User({
        phone: req.body.phone,
        password: req.body.password,
        account: req.body.account
      
    })

    user.save().then((createdUser=> {
        res.status(201).json(createdUser)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports =router;




// "gameTime":"20:00 ","timeType":"pm","gameDay":"sun","gameDate":"9/10","matchName1":"manchester","matchName2":"man city","matchLeague":"england","countInStock":{"$numberInt":"2"},"__v":{"$numberInt":"0"}}