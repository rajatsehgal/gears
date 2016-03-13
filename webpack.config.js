module.exports = {
  entry: './demo.js',
  output: {
    path: __dirname + '/built',
    filename: 'demo.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};