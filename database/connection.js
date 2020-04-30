const mongoose = require('mongoose');
const assert = require('assert');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/CRmodule', { useMongoClient: true });

const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const findDocuments = (currdb, callback) => {
  console.log('I RAN IN DB');
  // Get the documents collection
  // const collection = currdb.collection('documents');
  // Find some documents
  db.find({}).toArray((err, docs) => {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs);
    callback(docs);
  });
};
// mongoose.connection.on('connected', function() {
//   console.log(connected("Mongoose default connection is open to ", dbURL));
// });
db.on('connected', () => console.log('connected'));

// export db everytime
module.exports = { db, findDocuments };
