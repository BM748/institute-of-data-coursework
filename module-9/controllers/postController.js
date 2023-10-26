"use strict";
let Models = require("../models");

const createPost = (req, res) => {
    // Creates a new post using JSON data POSTed in request body
    console.log('data createPost: data',req.body);
    new Models.Post(req.body).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(err=>{
        console.log(err);
        res.send({result: 500, error: err.message});
    });
}

const getPost = (res) => {
    // Retrieve a list of posts
    Models.Post.find()
    .then(post => res.send({result: 200, data: post}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message});
    });
}

const likePost = (postId, userId, res) => {
    // Like a post
    Models.Post.findByIdAndUpdate(postId, { $addToSet: { likes: userId } }, { new: true })
    .then(post => {
        res.send({result: 200, data: post});
    })
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message});
    });
}


module.exports ={ createPost, getPost ,likePost,

}