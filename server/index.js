const express = require('express');
const path = require('path');
// method in databse
const { findDocuments } = require('../database/connection.js');

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '/../public')));

// import database connection
const db = require('../database/connection.js');

// all calls to api/products/reviews
app.get('/api/products/reviews', (req, res) => {

  findDocuments(db, (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(results);
  });
});
// listen call
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
