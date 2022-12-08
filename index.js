// index.js
// where your node app starts

// init project
var os = require('node:os');
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
const { Agent } = require('node:http');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami',function (req,res){
  let ipaddress = os.networkInterfaces()['Wi-Fi'][1].address
  let software = req.rawHeaders['15'] //['Symbol(kHeaders)']
  let language =  req.rawHeaders['29']
  res.json({"ipaddress":ipaddress,"language":language,"software":software,})
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
