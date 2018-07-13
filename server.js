var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var config = require('./config.js');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

var connection = mysql.createConnection(config.connection);
connection.connect(function(err) {
	if (err) throw err
	//console.log('You are now connected...')
});

app.use(function(req, res, next) {
	connection.query("SELECT * FROM cgn_api_users where Username=? and Password=? and Status=1",[ req.headers['username'], req.headers['password'] ],function (error, results) {
		var isLogin = results.length;
 		if(isLogin) {
			res.statusCode = 200;
			require("./APIs.js")(app);
			next();
		}else{
			res.end("Access denied!");
		}
	});
});

var server = app.listen(3000, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Server is running! port:3000");
});
