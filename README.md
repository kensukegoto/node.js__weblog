# NODE_ENV

launch.jsonにて、デバッグ実行時のオプションとして`NODE_ENV`を設定出来る。<br>
デバッグ実行のモードに応じて`NODE_ENV`が変わる。

# ESLint

- VSCodeにESLintを拡張機能として追加
- `npm install eslint -D`(-D、-Sはバージョン保存)
- ウィザードを立ち上げる
`./node_modules/.bin/eslint --init`
- .eslintrc.jsが作成されるので追加編集
- ルール一覧<br>
https://garafu.blogspot.com/2017/02/eslint-rules-jp.html

# gulp + babel

- gulpのタスク内にjsのオブジェクトとしてbabelの設定を渡す方法
- babel.config.jsにbabelの設定を記述する方法