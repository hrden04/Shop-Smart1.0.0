const express = require('express');
const PORT = process.env.PORT || 3030;


const app = express();

app.use(express.json());

app.use(express.static(__dirname + '/../public'));

//all calls to api/products/reviews

//import database connection
const db = require('../database/connection.js');







//listen call
app.listen(PORT, () => {
  console.log('server listening on port ' + PORT);
});