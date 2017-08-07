# Express
Node.jsのフレームワークであるExpressを[ドキュメント](http://expressjs.com/ja/)を参考にして色々触ってみる

# Expressでの静的ファイルの提供
画像、CSS、JavaScriptファイルなどの静的アセットファイルを提供するには、Expressに標準実装されれいる`express.static`ミドルウェア関数を利用する。

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

`express.static`に指定するパスは、nodeプロセスを起動するディレクトリに対して相対のため、別のディレクトリからExpressアプリケーションを実行する場合は、提供するディレクトリの絶対パスを指定する方が安全である。

```javascript
app.use('/static', express.static(__dirname + '/public'));
```