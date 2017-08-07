const express = require('express');
const app = express();

/**
 * ルートパスへのGETリクエストに対する応答
 */
app.get('/', (req, res) => {
  res.send('<img src="/images/sample.png" alt="sample">');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.use(express.static('public'));