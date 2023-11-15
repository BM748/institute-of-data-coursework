'use strict'

const Models = require ('../models');

const  getComment = (res) => {
    Models.Comment.findAll({}).then(function (data) {
        res.send({result:200, data:data})
    }).catch (err =>{
        throw err
    })
}
const createComment = (data, res) => {
    Models.Comment.create(data).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err =>{
        throw err
    })
  
}

const updateComment =(req, res) => {
    Models.Comment.update(req.body, {where:{id: req.params.id} })
    .then(function (data) {
        res.send({result: 200, data: data})
    }).catch (err => {
        console.log(err);
    });
}



const deleteComment =(req, res) => {
    Models.Comment.destroy(req.body, {where:{id: req.params.id} })
    .then(function (data) {
        res.send({result: 200, data: data})
    }).catch (err => {
        console.log(err);
    });
}




module.exports ={
    getComment,
    createComment,
    updateComment,
    deleteComment
}