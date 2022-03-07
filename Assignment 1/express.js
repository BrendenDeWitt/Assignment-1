var http = require('http');
// constant with the hostname 
const hostname = '127.0.0.1';
// constant with the port
const PORT=3000; 
// constant that stored the parsed information from the json file
const tweets = require('./tweets.json');
var express = require('express');
var app = express();
var fs = require('fs');

// Was used to get the information from the json file and show it on the console
app.get('/assigment1', function (req, res) {
   fs.readFile( __dirname + "/" + "tweets.json", 'utf8', function (err, data) {
      console.log(data);
      res.end(data);
   });
})
// console.log(tweets[0].user.screen_name);

// This was used to read the index html file and show it on the local host port
fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
	console.log('Server listening on ' + PORT);
});