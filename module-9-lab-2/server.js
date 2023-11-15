const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require('./dbConnect');
const morgan = require('morgan');
const userRoutes= require ('./routes/userRoutes')
const postRoutes = require ('./routes/postRoutes')
const commentRoutes = require('./routes/commentRoutes')
const holidayRoutes = require ('./routes/holidayRoutes')

// parse requests of content-type -application/json
app.use(express.json());
app.use(morgan('tiny'));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to myMySQL application." });
});

app.use('/api/users', userRoutes)
app.use('/api/post', postRoutes)
app.use('/api/comment',commentRoutes)
app.use('/api/holiday', holidayRoutes)

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});