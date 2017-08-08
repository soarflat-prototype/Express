# Expressでの静的ファイルの提供
画像、CSS、JavaScriptファイルなどの静的アセットファイルを提供するには、Expressに標準実装されている`express.static`ミドルウェア関数を利用する。

静的アセットファイルが格納されているディレクトリ名（パス）を`express.static`ミドルウェア関数に渡すと、ファイルの直接提供が開始する。

例えば`public`というディレクトリ内の静的ファイルを提供するためには以下のように記述する。

```javascript
app.use(express.static('public'));
```

複数の静的アセットディレクトリーを使用するには、`express.static`ミドルウェア関数を複数回呼び出す。


```javascript
app.use(express.static('public'));
app.use(express.static('files'));
```

## `express.static`に指定するパスは絶対パスの方が安全

`express.static`に指定するパスは、nodeプロセスを起動するディレクトリに対して相対のため、別のディレクトリからExpressアプリケーションを実行する場合は、提供するディレクトリの絶対パスを指定する方が安全である。

```javascript
app.use('/static', express.static(__dirname + '/public'));
```

## `express.static`の利用例

利用例のディレクトリ構成は以下を想定。

```bash
.
├── app.js
└── public
    └── images
        └── sample.png
```

**app.js**

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<img src="/images/sample.png" alt="sample">');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

/**
 * app.useは指定されたミドルウェア関数を指定したパスで実行する
 * 今回はexpress.staticミドルウェア関数をpublicパスで実行し、静的アセットファイルを提供する
 */
app.use(express.static('public'));
```

上記はpublicパスの静的アセットファイルを提供し、その画像をHTTPレスポンスとして返す利用例。

`node app.js`を実行後、ブラウザで`http://localhost:3000/`にアクセスすると以下のように画像が表示される。

<img src="../README_resources/static-files.jpg">

Expressは、**静的ディレクトリ（今回の例だとpublicパス）から相対的なファイルを検索するため、静的ディレクトリのパスはURLには含まれない。**

そのため、利用例のように画像パスの指定は`/public/images/sample.png`ではなく、`/images/sample.png`になる