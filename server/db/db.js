var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/' //library name after 'localhost/'

// tells mongoose where the database is;
mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
  console.log('connected to' + connectionString);
})

mongoose.connection.on('error', function(error){
  console.log('mongodb error ' + error );
})

mongoose.connection.on('disconnected', function(){
  console.log('Mongoose disconnected from' + connectionString);
})
