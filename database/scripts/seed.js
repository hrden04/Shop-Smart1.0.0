/* eslint-disable no-irregular-whitespace */
const faker = require('faker');
const { Review, reviewsSchema } = require('../models/reviewsModel.js');


// iterate over obj to create # of review models
const createReviews = () => {
  // product number counter
  let productCounter = 1000;

  for (let i = 0; i < 10; i += 1) {
    // create random properties or objects
    const randomFirstName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    const randomReviewerImage = faker.image.avatar();
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
      productId: productCounter,
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
    // add one to product counter
    productCounter += 1;
  }
};

// call this to create 1000 reviews
const currReviews = createReviews();

module.exports = { currReviews };
