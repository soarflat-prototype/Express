const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// application/x-www-form-urlencodedをパースする
app.use(bodyParser.urlencoded({ extended: true }));

// application/jsonをパースする
app.use(bodyParser.json());

/**
 * curl -v -H 'Content-type:application/json' -X POST -d '{"firstName":"Taro","lastName":"Suzuki"}'  http://localhost:3000/form
 */
app.post('/form', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    firstName: req.body.firstName || null,
    lastName: req.body.lastName || null
  }));

  console.log('you posted: First Name: ' + req.body.firstName + ', Last Name: ' + req.body.lastName);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});