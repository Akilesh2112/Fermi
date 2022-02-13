const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const path = require( 'path' );

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve( __dirname, 'dist' ),
    publicPath: '/',
    filename: 'main.js'
  },
  plugins: [ new HtmlWebpackPlugin( {
    title: "test",
    template: './src/index.html'
  } ),
  new MiniCssExtractPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join( __dirname, "dist" )
    },
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, "css-loader" ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: [ /\.vert$/, /\.frag$/ ],
        use: "raw-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: "file-loader"
      }
    ]
  }
};