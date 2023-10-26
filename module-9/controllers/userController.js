"use strict";
let Models = require("../models"); //matches index.js

const getUsers = (res) => {
    //find all users
    Models.User.find({})
    .then(data=> res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err => {
            console.log(err);
            console.log(err);
            res.send({result:500, error: err.message})
        })
    })
}

const createUser = (req, res) => {
    //creates a new user using JSON data POSTed in request body
    new Models.User(req.body).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(err=>{
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

module.exports = {
    getUsers, createUser
}