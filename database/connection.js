const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://database/ReviewsDb', { useMongoClient: true });

const ReviewsDb = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
ReviewsDb.on('error', console.error.bind(console, 'MongoDB connection error:'));

ReviewsDb.on('connected', () => console.log('connected'));

// export db everytime
module.exports = { ReviewsDb };
