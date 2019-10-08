const express = require('express');
const productList = require('./products.json');
const app = express();
const bodyParser = require('body-parser');

app.listen(3000, () => console.log('Gator app listening on port 3000!'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send(JSON.stringify(productList));
});

app.post('/api'),
  (req, res) => {
    console.log(req.body.desc);
    res.end();
  };
