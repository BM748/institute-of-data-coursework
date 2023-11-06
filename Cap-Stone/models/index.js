// 'use strict'
const Artist = require('./artist');
const User = require('./user');
const Review = require('./review')


async function init() {
    await Artist.sync()
    await User.sync()
    await Review.sync()
    
};

init()

module.exports = {
    Artist,
    User,
    Review
   
};