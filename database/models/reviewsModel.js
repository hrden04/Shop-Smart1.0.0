const mongoose = require('mongoose');

// create schema for reviews
const reviewsSchema = mongoose.Schema({ // want ids using numbers begining at 1000
  reviewersFirstName: String,
  reviewersLastName: String,
  reviewersImage: String,
  reviewersEmail: String,
  starsCount: { type: Number, min: 0, max: 5 }, // also want to make min max for stars
  topDescription: String,
  reviewDate: String,
  verifiedPurchase: Boolean,
  midDescription: String,
  productImage: String,
  productId: Number,
  helpfulCount: Number,
});

// want to use virtuals for the urls ===========================>

// create model for reviews
const Review = mongoose.model('Review', reviewsSchema);

const findDocuments = (callback) => {
  // Find all documents
  Review.find({}, (err, docs) => {
    console.log('Made it here!');
    if (err) {
      callback(err);
      // console.log('Error: ', err);
    } else {
      // console.log('document: ', docs);
      callback(null, docs);
    }
  });
};

// Export function to create "reviews" model class
module.exports = { Review, findDocuments };
