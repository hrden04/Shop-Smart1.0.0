const faker = require('faker');
const Review = require('./reviewsModel.js');
const Promise = require('bluebird');



//iterate over obj to create 1000 review models
const createReviews = function() {
  //target array for reviews
  let reviewArr = [];

  for (var i = 0; i < 10; i++) {
    //create random properties or objects
    const randomFirstName = faker.name.firstName(); 
    const randomLastName = faker.name.lastName();
    const randomReviewerImage = faker.image.people(); 
    const randomEmail = faker.internet.email(); 
    const randomStarsCount = faker.random.number({max: 5});// change to max 5
    const randomTopDescription = faker.lorem.sentence();
    const randomReviewDate = faker.date.past();
    const randomVerifiedPurchase = faker.random.boolean();
    const randomMidDescription = faker.lorem.paragraph();
    const randomProductImage = faker.image.technics();
    const randomHelpfulCount = faker.random.number();

    //create object with random data
    const reviewExample = {
      reviewersFirstName: randomFirstName,
      reviewersLastName: randomLastName,
      reviewersImage: randomReviewerImage,
      reviewersEmail: randomEmail,
      starsCount: randomStarsCount,
      topDescription: randomTopDescription,
      reviewDate: randomReviewDate,
      verifiedPurchase: randomVerifiedPurchase,
      midDescription: randomMidDescription,
      productImage: randomProductImage,
      helpfulCount: randomHelpfulCount
    };

    //create new review for each obj
    let reviewRecord = new Review(reviewExample);
    //push to array
    reviewRecord.save(function (err) {
      if (err) {
        console.log('error from db save', err);
        return;
      } else {
        console.log('saved');
      }
    // saved!
    });
  }
  //return giant array of reviews
  return reviewArr;
};

//call this to create 1000 reviews
let currReviews = createReviews();

//console.log(currReviews);



module.exports = currReviews;
//save says its deprecated ================>


//possible random balancing
// faker.seed(123);
// var firstRandom = faker.random.number();
// // Setting the seed again resets the sequence.
// faker.seed(123);
// var secondRandom = faker.random.number();
// console.log(firstRandom === secondRandom);