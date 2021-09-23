const fs = require('fs')
const express = require("express")
const app = express()
const http = require("http")

//create server using certificate
var server = http.createServer(app)

//using ejs view engine
app.set('view engine', 'ejs')

//change views directory
app.set('views', __dirname + '/public/views/')
app.use(express.static("public"))

//add route
app.get("/", function (req, res) {
    res.render("index")
})



//listen on port 443 to run ssl
server.listen(80)