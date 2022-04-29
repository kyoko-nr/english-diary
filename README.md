# アプリはここで公開しています
https://english-diary-1c6dd.web.app/signin

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# ESLintとPrettierの設定
このプロジェクトでは、GitにcommitするタイミングでESLintとPrettierを使用してコードのチェックと整形を行います。

## 導入コマンド
```
npm install --save-dev eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## パッケージの説明
<dl>
  <dt>eslint-config-prettier</dt>
  <dd>ESLintとPrretierを併用する際に使用する</dd>
  <dt>@typescript-eslint/eslint-plugin</dt>
  <dd>ESLintでTypeScriptのチェックを行うプラグイン</dd>
  <dt>@typescript-eslint/parser</dt>
  <dd>ESLintでTypeScriptを解析できるようにする</dd>
  <dt>husky</dt>
  <dd>Gitコマンドをフックに別のコマンドを呼び出す</dd>
  <dt>lint-staged</dt>
  <dd>コミットしたファイル（stagingにあるファイル）にlintを実行することができる</dd>
</dl>

## 設定ファイル

### ESLint
.eslintrc.js

### Prettier
.prettierrc

## ESLintとPrettierを手動で起動する
以下のコマンドを実行する
```
npm run lint-fix
```

# huskyの設定

## 導入
```
npm install --save-dev husky lint-staged
```

## huskyの初期化
```
npx husky install
npm set-script prepare "husky install"
```

## スクリプトの編集
プロジェクト直下の.husky/pre-commitを以下の通り編集する

```.husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
- npm test
+ npm run lint-staged
```

## package.jsonの編集

scriptsにlint-stagedを追加

```package.json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "prepare": "husky install",
+ "lint-staged": "lint-staged"
},
```

末尾に以下の記述を追加

```package.json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx}": [
    "npm run lint-fix"
  ]
}
```

以上の設定で、git commit時にprettierとESLintが起動する。

### もし動かない場合
npm(もしくはyarn)、gitのバージョンを最新にしてみる

# ルーティングの設定
ルータを導入する
```
npm install --save react-router-dom
npm install --save-dev @types/react-router-dom

```

# Firebase

### firebase deploy
```
firebase deploy
```

### firebase deploy only rules
```
firebase deploy --only firestore:rules
```
