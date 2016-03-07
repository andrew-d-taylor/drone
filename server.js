var express = require('express');
var app = express();                              
var bodyParser = require('body-parser');

var request = require('request');

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.get('/api/drones', function(req, res) {
    request('http://api.dronestre.am/data', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body));
        } else {
            res.send(err);
        }
    });
});

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.listen(8080);
console.log("App listening on port 8080");