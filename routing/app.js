const express = require('express');
const app = express();

/**
 * ルートパスへのGETリクエストに対する応答
 */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
 * ルートパスへのPOSTリクエストに対する応答
 * CLI上で
 * curl -sS -w '\n' -X POST 'localhost:3000/'
 * 実行すると、POSTリクエストを送れるので確認できる
 */
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});