# 概要
キーワードを入力して関連する映画を表示するAPIです
## 使用したもの  
* node  
* OMDB API(使用したAPI)
## 構成  
* myapp/src/components>App.js  
* myapp/src/components>Header.js  
* myapp/src/components>Movie.js  
* myapp/src/components>Search.js
### App.js  
親コンポーネント  
7 const URL = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b'  //映画情報を扱うAPI//
### Header.js  
タイトルのプロップスを受け取るコンポーネント  
### Movie.js  
映画を表示するコンポーネント  
3 const Defaultimage   //画像がない一部映画の代わりとなる画像を格納//  
### Search.js  
検索コンポーネント  
## その他  
App.jsの三項式の形式ミスやバグを見つけるため、*ESLint*のインストール  
`$ eslint --init`  
APIの取得　'http://www.omdbapi.com/apikey.aspx'  
## 最後に  
Web上でどの様なAPIがあるかを調べて目についたのがこのAPIに関するサイトで、  
自分一人では作ることが難しかったため、友人と協力して作成しました。








