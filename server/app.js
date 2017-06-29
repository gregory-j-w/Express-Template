var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path'),
    require('./db/db.js');



server.listen(3000, function(){
  console.log('listening on port 3000');
  })
