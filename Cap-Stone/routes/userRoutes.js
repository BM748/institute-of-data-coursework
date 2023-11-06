const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.artistController.getUsers(res);
})

router.post('/create', (req, res) => {
    Controllers.artistController.createUsers(req.body, res)
})


module.exports = router;