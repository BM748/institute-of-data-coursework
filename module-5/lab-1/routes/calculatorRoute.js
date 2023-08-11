const express = require('express');
const router = express.Router();



router.get('/add', (req, res) => {
    const {num1,num2} = req.query;

    const total = parseInt(num1) + parseInt(num2);

    //res.send(`the sum of ${num1} and ${num2} is ${total}`)//:
    

    res.status(200)
    res.json({result:total})

});
router.get('/subtract', (req, res) => {
    const {num1,num2} = req.query;

    const total = parseInt(num1) - parseInt(num2);

    res.status(200)
    res.json({result:total})

   

});

router.get('/multiply', (req, res) => {
    const {num1,num2} = req.query;

    const total = parseInt(num1) * parseInt(num3);

    res.status(200)
    res.json({result:total})



});


router.get('/divide', (req, res) => {
    const {num1,num2} = req.query;

    const total = parseInt(num1) / parseInt(num2);

    res.status(200)
    res.json({result:total})

  


});


    module.exports = router;