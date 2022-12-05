// import
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// export
module.exports = {
  // parcel index.html
  // 파일을 읽어들이기 시작하는 진입점 설정, 자바스크립트를 진입점으로 사용
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    // 절대경로를 명시해줘야 한다.
    // path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
    // 이전에 만들었던 파일을 제거해준다.
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  devServer: {
    host: "localhost",
  },
};
