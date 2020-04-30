const mongoose = require('mongoose');
const db = require('../connection.js');

//create schema for reviews
const reviewsSchema = mongoose.Schema({ //want ids using numbers begining at 1000
  reviewersFirstName: String,
  reviewersLastName: String,
  reviewersImage: String,
  reviewersEmail: String,
  starsCount: { type: Number, min: 0, max: 5 }, //also want to make min max for stars
  topDescription: String,
  reviewDate: String,
  verifiedPurchase: Boolean,
  midDescription: String,
  productImage: String,
  productId: Number,
  helpfulCount: Number
});

//want to use virtuals for the urls ===========================>

//create model for reviews
var Review = mongoose.model('Review', reviewsSchema);


//Export function to create "reviews" model class
module.exports = Review;

