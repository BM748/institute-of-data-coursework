"use strict";
let Models = require("../models");


const createComment = (postId, comment, res) => {
    // Comment on a post
    Models.Post.findByIdAndUpdate(postId, { $push: { comments: comment } }, { new: true })
    .then(post => {
        res.send({result: 200, data: post});
    })
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message});
    });
}

module.exports={
    createComment
}