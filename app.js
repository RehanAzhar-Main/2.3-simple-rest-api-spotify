const express = require('express')
const app = express()
const path = require('path')
const port = 3000
    // const uuid = require('uuid');

//routes
const userRoute = require("./routes/users.route.js")

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

app.use("/users", userRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})