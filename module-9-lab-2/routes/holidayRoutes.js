const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.get('/', (req,res) => {
    Controllers.holidayController.getHoliday(res);
})

router.post('/create', (req, res) => {
    Controllers.holidayController.createHoliday(req.body, res)
})



module.exports = router;