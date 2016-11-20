var express = require('express');
const React = require('react');
const ReactDOM = require('react-dom');
var cookieParser = require('cookie-parser');

var app = express();


app.use(cookieParser());
app.use(express.static('public'));


app.get('/setcookie', function (req, res){
	res.cookie('email','hierifer@hotmail.com',{maxAge:800000, httpOnly:true});
	res.redirect('/test.html?email=hierifer@hotmail.com');
	res.end();
});

app.get('/cookie', function (req, res){
	res.write(req.cookies.email);
	res.end();
});

app.get('/getcookie', function (req, res){
	console.log(req.cookies.email);
	var email_cookie = req.cookies.email;
	if(email_cookie != ""){
		res.send(JSON.stringify(email_cookie));
		res.end();
		return;
	}else{
		res.send(JSON.stringify("cookie error"));
	}
	res.end();
});

app.post('/post_gradelist', function (req, res){
	console.log(req.headers);
	if(req.body.secondParam){
		console.log(req.body.email);
		res.send(JSON.stringify("this"));
		return;
	}else{
		console.log("invalid");
		res.send(JSON.stringify("this"));
		return;
	}
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.write("404: NOT FOUND");
  res.end();
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
