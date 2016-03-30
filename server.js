var express = require('express');
var app = express();

app.get('/', function(res, res) {
	res.sendFile(__dirname + '/view/index.html');
});

app.use('/', express.static(__dirname + '/view'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));

// Listen
app.listen(3000, function() {
	console.log('Listening on port 3000...');
});