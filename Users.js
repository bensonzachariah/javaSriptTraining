const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req,res) => {

    //  res.send(req.body);
    const today = new Date()
    const userData = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email: req.body.email,
        password:req.body.password,
       
        created:today
    }

    

    User.findOne({
        email:req.body.email
    })
    .then(user => {
        if(!user) {
            
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({status:user.email + 'registered!'})
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            })
        }
        else {
            res.json({error : 'user alreday exist'})
        }
    })
    .catch(err => {
        res.send('error :' + err)
    })
})


users.post('/login', (req, res) => {
    User.findOne ({
        email:req.body.email
    })
    .then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                const payload = {
                    _id : user._id,
                    firstname :user.firstname,
                    lastname : user.lastname,
                    //
                    dob:user.dob,
                    email:user.email,
                }
                let token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn : 1440
                })

                res.send(token)
            }
            else{
                res.json({error : "Users doesnot exist"})
            }
        }else{
            res.json({error:"users doesnot exist"})
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

users.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process. env.SECRET_KEY)

    User.findOne({
        _id: decoded._id
    })
    .then(user => {
        if(user){
            res.json(user)
        }else{
            res.send("user doesnot exist")
        }
    })
.catch(err => {
    res.send('error: ' + err)
})


})

module.exports = users