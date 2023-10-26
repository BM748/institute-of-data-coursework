let express = require ("express");
let router = express.Router();
let Controllers = require("../controllers");

router.post('/create/:postId', (req, res) => {
    const postId = req.params.postId;
    const comment = req.body.comment;

    

    Controllers.commentController.createComment(postId, comment, res)
});

module.exports = router;