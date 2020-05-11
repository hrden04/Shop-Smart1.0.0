/* eslint-disable no-irregular-whitespace */
const faker = require('faker');
const { Review, reviewsSchema } = require('../models/reviewsModel.js');


// i have 100 product ids that need 1 to 20 reviews

// iterate over obj to create # of review models
const createReviews = (num, productNum) => {
  // loop num amount of times to create reviews
  for (let i = 0; i < num; i += 1) {
    // create random properties or objects
    const randomFirstName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    // either default amazon image
    let randomReviewerImage = 'https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png';
    // or new faker image avatar
    if (i % 2 === 0) {
      randomReviewerImage = faker.image.avatar();
    }


    const randomEmail = faker.internet.email();
    const randomStarsCount = faker.random.number({ max: 5 });// change to max 5
    const randomTopDescription = faker.lorem.sentence();
    const randomReviewDate = faker.date.past();
    const randomVerifiedPurchase = faker.random.boolean();
    const randomMidDescription = faker.lorem.paragraphs();
    const randomProductImage = faker.image.technics();
    const randomHelpfulCount = faker.random.number({ max: 500 });

    // create object with random data
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
      productId: productNum,
      helpfulCount: randomHelpfulCount,
    };
    // create new review for each obj
    const reviewRecord = new Review(reviewExample);

    // push to array
    reviewRecord.save((err) => {
      if (err) {
        console.log('error from db save');
        return;
      }
      console.log('saved: ');
    // saved!
    });
  }
};

// create function to create groups of reviews with same product number using random number.
const createProducts = () => {
  // product number counter
  let productCounter = 1000;
  // loop to 100 to create products with reviews
  for (let i = 0; i < 100; i += 1) {
    // create random number for amount of reviews to create
    let randomNum = Math.floor(Math.random() * Math.floor(20));
    createReviews(randomNum, productCounter);
    productCounter += 1;
  }
};

// call this to create 1000 reviews
const currReviews = createProducts();

module.exports = { currReviews };
