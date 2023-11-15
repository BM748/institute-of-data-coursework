'use strict'

const Models = require ('../models');

const  getPost = (res) => {
    Models.Post.findAll({}).then(function (data) {
        res.send({result:200, data:data})
    }).catch (err =>{
        throw err
    })
}

const createPost = (data, res) => {
    Models.Post.create(data).then(function (data) {
        res.send({ result: 200 , data: data})
    }).catch(err =>{
        throw err
    })
  
}

const updatePost =(req, res) => {
    Models.Post.update(req.body, {where:{id: req.params.id} })
    .then(function (data) {
        res.send({result: 200, data: data})
    }).catch (err => {
        console.log(err);
    });
}



const deletePost =(req, res) => {
    console.log('id: ', req.params.id);
    Models.Post.destroy({where:{id: req.params.id} })
    .then(function (data) {
        res.send({result: 200, data: data})
    }).catch (err => {
        console.log(err);
    });
}



module.exports = {
    getPost,
    createPost,
    updatePost,
    deletePost
    
}