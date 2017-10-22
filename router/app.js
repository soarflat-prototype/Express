const express = require('express');
const birds = require('./birds');

const app = new express();

app.use('/birds', birds);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});