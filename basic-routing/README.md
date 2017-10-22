# 基本的なルーティング
ルーティングとは、アプリケーションが特定のエンドポイントに対するクライアント要求に応答する手段のこと。

応答する手段として、URI（またはパス）と特定のHTTPリクエスト（GET、POSTなど）を決定すること。

各ルートしては、１つ以上のハンドラ関数があり、それらはルートが一致した際に実行される。

## ルーティングの構文

ルート定義は以下の構文で記述する。

```javascript
app.METHODO(PATH, HANDLER);
```

- `app`はexpessのインスタンス
- `METHOD`はHTTPリエクスト
- `PATH`はサーバ上のパス
- `HANDLER`はルート一致したときに実行される関数

## ルーティングの利用例

以下の場合だと、エンドポイントであるルートパス（/）に対するGETリクエスト（クライアント要求）にHello World!と応答する。

```javascript
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

以下の場合だと、エンドポイントであるルートパス（/）へのPOSTリクエスト（クライアント要求）に対してGot a POST requestと応答する。

```javascript
app.post('/', (req, res) => {
  res.send('Got a POST request');
});
```