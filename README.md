# README

## インストール方法
`$ ./install.sh` を実行

## 使い方
`src` にコードを記述(mainはserver.ts)後、`$ npm run build` でdistにコンパイル後のファイルが出来上がる。
`scripts.sh`ファイルのbuild関数内でelectron-packagerコマンドの`--platform`と`--arch`オプションを編集し、どのプラットフォーム向けにビルドするかを指定する。
`$ node ./dist/server.js` でプログラム起動。
