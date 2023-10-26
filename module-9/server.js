const dbConnect = require("./dbConnect");
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const commentRoutes = require('./routes/commentRoutes')

const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");


app.use(morgan("tiny"));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes)



app.get("/", (req,res) => {
    res.json({message: "Welcome to my MongoDB application."});

})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});