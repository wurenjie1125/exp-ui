const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: [
    require.resolve("react-dev-utils/webpackHotDevClient"),
    path.resolve(__dirname, '../../site/index.js')
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../../dist")
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "cheap-module-source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".less"],
    alias:{
      'expui': process.cwd(),
      '@': path.resolve(__dirname, '../../'),
      '@site': path.resolve(__dirname, '../../site')
    }
  },
  mode: "development",

  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader:"postcss-loader",
            options:{
              ident: 'postcss',
              plugins: () => {
                require('autoprefixer')({
                  overrideBrowserslist:['last 2 versions', '>1%','ios 7'],
                  flexbox: 'no-2009',
                })
              }
            }
           
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      },
      {
        test: [/\.png$/,/\.gif$/,/\.bmp$/,/\.jpe?g$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            }
          }
        ]

      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../../site/index.html")
    }),
    // new webpack.HotModuleReplacementPlugin()
  ]
};
