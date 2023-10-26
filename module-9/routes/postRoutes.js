let express = require ("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.postController.getPost(res);
})

router.post('/create', (req, res) =>{
    Controllers.postController.createPost(req, res)
})

router.post('/like', (req,res) =>{
    Controllers.postController.likePost(postId, userId, res);
})

module.exports = router;

