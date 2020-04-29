const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/CRmodule', { useNewUrlParser: true });


const db = mongoose.connection;//============== what is this >

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



