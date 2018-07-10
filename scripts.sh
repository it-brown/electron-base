#!/bin/bash -eu

function clean() {
    npx rimraf './dist/*'
    npx rimraf './dist-electron/*'
    npx rimraf './public/*'
}

function build() {
    export NODE_ENV='production'
    npm install
    clean && npx webpack
    current=$(pwd) && cd "../client" && npm install && npm run build && cd "${current}"
    if [ ! -d "./public/" ]; then
        mkdir "./public/"
    fi
    cp -r ../client/dist/* "./public/"
    electron-packager "." "FirstElectronApp" --platform="darwin" --arch="x64" --out="./dist-electron"
}

function dev() {
    export NODE_ENV='development'
    clean && npx webpack && node dist/main.bundle.js
}

function build_typedoc() {
    typedoc --name "$1" --mode 'file' --out './document/typedoc' './src'
}

if [ -z ${2+UNDEF} ]; then
    $1
else
    $1 $2
fi
