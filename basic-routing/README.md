# 基本的なルーティング
ルーティングとは、アプリケーションが特定のエンドポイントに対するクライアント要求に応答する手段として、URI（またはパス）と特定のHTTPリクエスト（GET,POSTなど）を決定すること。

各ルートしては、１つ以上のハンドラ関数があり、それらはルートが一致した際に実行される。

ルート定義は以下の構文で記述する。

```javascript
app.METHODO(PATH, HANDLER);
```

以下の場合だと、ルートパス（/）へのGETリクエストに対してHello World!と応答する。

```javascript
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

以下の場合だと、ルートパス（/）へのPOSTリクエストに対してGot a POST requestと応答する。

```javascript
app.post('/', (req, res) => {
  res.send('Got a POST request');
});
```