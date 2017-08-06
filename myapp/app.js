const express = require('express');
/**
 * express()（Expressモジュールによってエクスポートされる最上位関数）から
 * Expressアプリケーション（appオブジェクトとも言われる）を作成する
 * appオブジェクトは以下のようなメソッドや
 *   ・HTTPリクエストのルーティング
 *   ・ミドルウェアの設定
 *   ・HTMLのレンダリング
 *   ・テンプレートエンジンの登録
 * アプリケーションの動作に影響を与える設定（プロパティ）等がある
 *
 * また、appオブジェクトは
 *   ・requestオブジェクトをreq.app
 *   ・responseオブジェクトをres.app
 * として参照できる
 */
const app = express();

/**
 * app.get()でHTTP GETリクエストに対してのルーティングを定義する
 * ルーティングとはクライアントからの要求（GET、POST）にどのように応答するか制御する仕組み
 *「URLに応じて実行する処理を指定する」ぐらいの認識で問題ない
 * 今回はルートパスにリクエストがあった際にres.send()でHTTP レスポンスを送る（返す）
 */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
 * ポート 3000 で接続を listen（接続要求を待つ）する
 */
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});