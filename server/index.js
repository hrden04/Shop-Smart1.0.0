const express = require('express');
const path = require('path');
// import database connection

// method in databse
const { findDocuments } = require('../database/models/reviewsModel.js');

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '/../public')));

// all calls to api/products/reviews
app.get('/api/products/reviews', (req, res) => {
  findDocuments((err, results) => {
    if (err) {
      res.status(400).json({
        message: 'Failed to get documents',
        error: err,
      });
    } else {
      res.status(200).json({
        message: 'Successfully found reviews',
        reviews: results,
      });
    }
    // console.log('sent');
  });
});
// listen call
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
