'use strict'
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const Holiday = require('./holiday');

async function init() {
    await User.sync()
    await Post.sync()
    await Comment.sync()
    await Holiday.sync()
};

init()

module.exports = {
    User,
    Post,
    Comment,
    Holiday
};