"use strict";

const Models = require("../models");



const  getReview = (res) => {
    Models.Review.findAll({}).then(function (data) {
        res.send({result:200, data:data})
    }).catch (err =>{
        throw err
    })
}
const createReview = (data, res) => {
    Models.Comment.create(data).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err =>{
        throw err
    })
  
}

module.exports={
    getReview,
    createReview
}