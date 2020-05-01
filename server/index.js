const express = require('express');
const path = require('path');
// import database connection
const db = require('../database/connection.js');

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
      console.log('Error getting documents', err);
    } else {
      console.log('Success getting documents');
      res.send(results);
    }
  });
});
// listen call
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
