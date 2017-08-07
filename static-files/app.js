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

/**
 * app.useは指定されたミドルウェア関数を指定したパスで実行する
 * 今回はexpress.staticミドルウェア関数をpublicパスで実行する
 * express.staticはExpressの唯一の標準組み込みのミドルウェア関数であり
 * 静的アセットファイルを提供する
 */
app.use(express.static('public'));