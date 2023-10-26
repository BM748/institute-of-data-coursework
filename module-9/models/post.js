const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const postSchema = new Schema ({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    title: { type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})


module.exports = mongoose.model('Post', postSchema);