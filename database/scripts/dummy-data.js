const faker = require('faker');
const Review = require('./reviewsModel.js');
var Promise = require('bluebird');

const randomFirstName = faker.name.firstName(); // Rowan 
const randomLastName = faker.name.lastName();
const randomReviewerImage = faker.image.people(); // random contact card containing many properties\
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomStarsCount = faker.random.number();
const randomTopDescription = faker.lorem.sentence();
const randomReviewDate = faker.date.past();
const randomVerifiedPurchase = faker.random.boolean();
const randomMidDescription = faker.lorem.paragraph();
const randomProductImage = faker.image.technics();
const randomHelpfulCount = faker.random.number();


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

//iterate over number to create 1000 reviews
const createReviews = function(obj) {
  //target array for reviews
  let reviewArr = [];

  for (var i = 0; i < 1000; i++) {
    reviewArr.push(obj);
  }
  return reviewArr;
};

//call this to create 1000 reviews
createReviews(reviewExample);


var r1 = new Review({ size: 'small' });
r1.save(function (err) {
  if (err) {
    return handleError(err);
  } else {
    console.log('saved', r1);
  }
  // saved!
});


console.log(r1);
//console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
// outputs: "Marks, Dean Sr."

// faker.seed(123);
// var firstRandom = faker.random.number();
// // Setting the seed again resets the sequence.
// faker.seed(123);
// var secondRandom = faker.random.number();
// console.log(firstRandom === secondRandom);