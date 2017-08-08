const express = require('express');
const app = express();

/**
 * app.route()を使用すると、ルートパスのチェーン可能なルートハンドラーを作成できる
 * app.get()で同じパスを何度も指定せずに済むため、冗長性とタイプミスを減らせる
 */
app.route('/events')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    res.send('Hello World!');
  })
  .post((req, res) => {
    // curl -sS -w '\n' -X POST 'localhost:3000/events'
    res.send('Got a POST request');
  });

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});