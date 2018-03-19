var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

const route = require("./route");

var app = express();

const PORT = 3000;



// mongoose.connect('mongodb://mydb:mydb123@ds245238.mlab.com:45238/todolist');
mongoose.connect('mongodb://localhost:27017/todolist');

mongoose.connection.on('connected', ()=>{
	console.log('mongodb connected');
})

mongoose.connection.on("error", (err)=>{
	console.log(err);
})

app.use(cors());
app.use(bodyParser.json());

app.use('/', route);

app.listen(PORT, ()=>{
	console.log("Server is running at " + PORT);
})

