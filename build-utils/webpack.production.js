const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => ({
  output: {
    filename: 'app.[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      { test: /\.html$/, 
        use: ['raw-loader']
      },
      { test: /\.ts$/, 
        use: ['ts-loader'] 
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()]
});
