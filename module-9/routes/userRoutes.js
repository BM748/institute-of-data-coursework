let express = require ("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
})

router.post('/create', (req, res) =>{
    Controllers.userController.createUser(req, res)
})

module.exports = router;