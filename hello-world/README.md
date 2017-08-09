# Hello World!
Expressアプリケーションを起動して、Hello World!を出力してみる。

以下を`node app.js`を実行し、ブラウザで`localhost:3000`にアクセスすれば、Hello World!が表示されたページが表示される。

**app.js**

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
```

## `express()`
Expressモジュールによってエクスポートされる最上位関数であり、Expressアプリケーション（appオブジェクトとも言われる）を作成する。

appオブジェクトは以下のようなメソッドや

- HTTPリクエストのルーティング
- ミドルウェアの設定
- HTMLのレンダリング
- テンプレートエンジンの登録

アプリケーションの動作に影響を与える設定（プロパティ）等がある。

また、appオブジェクトは

- requestオブジェクトをreq.app
- responseオブジェクトをres.app

として参照できる。

## `app.get()`
HTTP GETリクエストに対してのルーティングを定義する。

ルーティングとはクライアントからの要求（GET、POST）にどのように応答するか制御する仕組みであり「URLに応じて実行する処理を指定する」ぐらいの認識で問題ない。

上記の利用例ではルートパス（'/'）にリクエストがあった際にres.send()でHTTP レスポンスを送る（返す）。
