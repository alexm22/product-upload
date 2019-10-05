const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

//set which envirmonent to trigger
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      // set enviroment variable
      mode,
      // set entry point of app
      entry: path.resolve('./src/app/app.module.js'),
      // create HTML file based on template
      resolve: {
        extensions: ['.ts', '.js']
      },
      plugins: [
        new HTMLWebpackPlugin({
          template: './src/index.html',
          inject: 'body'
        }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode)
  );
};
