var express = require('express');
var app = express();
var homeRouter = require("./routes/home.route");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var session = require('express-session');
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'ngohung0',
  resave: true,
  saveUninitialized: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views","./views");


app.use("/",homeRouter);



app.listen(3000,()=>{
	console.log("da ket noi");
});