const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require('./dbConnect');
const morgan = require('morgan');


app.use(express.json());
app.use(morgan('tiny'));









// set port, listen for requests
const PORT = process.env.PORT || 3081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});