const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/CRmodule', { useMongoClient: true });

const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// mongoose.connection.on('connected', function() {
//   console.log(connected("Mongoose default connection is open to ", dbURL));
// });
db.on('connected', () => console.log('connected'));

// export db everytime
module.exports = db;
