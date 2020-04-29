var mongoose = require('mongoose');

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
  helpfulCount: Number
});

//want to use virtuals for the urls ===========================>

//create model for reviews
var Review = mongoose.model('Review', reviewsSchema);

//create indivdual document
// var r1 = new Review;
// r1.reviewersFirstName = 'Joshua',
// r1.reviewersLastName = 'Oxner',
// r1.reviewersImage = 'http://fakeimage.com',
// r1.reviewersEmail = 'josh@josh.com',
// r1.starsCount = 4,
// r1.topDescription = 'its athings that does a things it does it sorta well',
// r1.reviewDate = 'july,2,2019',
// r1.verifiedPurchase = true,
// r1.midDescription = 'What an amazing thing it is for sure',
// r1.productImage = 'http//anotherfakeiamge.com',
// r1.helpfulCount = 12;


// // Create an instance of model SomeModel
// var awesome_instance = new SomeModel({ name: 'awesome' });

// // Save the new model instance, passing a callback
// awesome_instance.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });

//Export function to create "reviews" model class
module.exports = mongoose.model('Reviews', reviewsSchema);

