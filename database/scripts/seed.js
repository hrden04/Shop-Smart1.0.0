/* eslint-disable no-irregular-whitespace */
const faker = require('faker');
const Review = require('../models/reviewsModel.js');


// iterate over obj to create 1000 review models
const createReviews = () => {
  for (let i = 0; i < 10; i += 1) {
    // create random properties or objects
    const randomFirstName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    const randomReviewerImage = faker.image.people();
    const randomEmail = faker.internet.email();
    const randomStarsCount = faker.random.number({max: 5});// change to max 5
    const randomTopDescription = faker.lorem.sentence();
    const randomReviewDate = faker.date.past();
    const randomVerifiedPurchase = faker.random.boolean();
    const randomMidDescription = faker.lorem.paragraph();
    const randomProductImage = faker.image.technics();
    const randomHelpfulCount = faker.random.number();

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
      helpfulCount: randomHelpfulCount
    };

    // create new review for each obj
    const reviewRecord = new Review(reviewExample);
    // push to array
    reviewRecord.save((err) => {
      if (err) {
        console.log('error from db save', err);
        return;
      }
      console.log('saved');
    // saved!
    });
  }
};

// call this to create 1000 reviews
const currReviews = createReviews();

module.exports = currReviews;
