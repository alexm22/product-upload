module.exports = () => ({
  module: {
    rules: [
      {
        // set webpack to read sass files //
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // set webpack to read any HTML templates created for angularJS components
      { test: /\.html$/, use: ['raw-loader'] },
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      { test: /\.ts$/, use: ['ts-loader'] },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'dist/',
              publicPath: '../',
              useRelativePaths: true
            }
          }
        ]
      }
    ]
  }
});
